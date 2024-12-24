/* eslint-disable no-unused-vars */
import { faBoxes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { useProducts } from "../../hooks/useProducts"
import { deleteProductSale, updateProductSale } from "../../app/api/productsApi"
import { validSale, validSale2 } from "../../app/valid/validSale"


export const SaleLayout = () => {
    const {data, fetchData, isLoading} = useProducts();
    const [products, setProducts] = useState();
    const [chooseSales, setChooseSales] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        setProducts(data.products)
    }, [data]);

    if (isLoading) return <div>Đang tải...</div>

    const handleSelectAll = () => {
        setSelectAll((prev) => {
            const newSelectAll = !prev;
            if (newSelectAll) {
                setChooseSales(products);
            } else {
                setChooseSales([]);
            }
            return newSelectAll;
        });
    }

    const handleChooseSale = (product) => {
        setChooseSales(prev => {
            const product_ = prev.some(p => p.id === product.id);
            if (product_) {
                return prev.filter(p => p.id !== product.id); // tạo 1 dah sách mới gồm những phần tử khác product.id
            }

            return [...prev, product] // add
        });
    }

    const handleUpdateSale = async () => {
        if (chooseSales.length === 0){
            alert('Chưa có sản phẩm nào được chọn.')
            return;
        }
        if (validSale(chooseSales)) {
            await updateProductSale(chooseSales);
            window.location.reload();
        }
    }

    const handleDeleteSale = async () => {
        await deleteProductSale(chooseSales);
        window.location.reload();
    }
      
    const columns = [
        {
            name: <span style={{ fontSize: "0.9rem" }}> Chọn </span>,
            sortable: true,
            width: "100px",
            cell: (row) => (
                <div>
                    <input  type="checkbox"
                            checked={chooseSales.some((p) => p.id === row.id)}
                            onChange={() => handleChooseSale(row)}
                    />
                </div>
            ),
        },
        {
            name: <span style={{ fontSize: "0.9rem" }}> Sản phẩm </span>,
            sortable: true,
            selector: (row) => row.name,
            width: "200px"
        },
        {
            name: <span style={{ fontSize: "0.9rem" }}> Khuyến mãi (%) </span>,
            sortable: true,
            cell: (row) => (
                <div className="-w-sale-column">
                    <input
                        type="text"
                        disabled={chooseSales.some(p => p.id === row.id) ? true : false}
                        value={row.discount_percentage || ""}
                        onChange={(e) => {
                            const value = e.target.value;
                            setProducts((prev) =>
                                prev.map((p) =>
                                    p.id === row.id ? { ...p, discount_percentage: value } : p
                                )
                            );
                        }}
                    />
                </div>
            ),
            width: "300px"
        },
        {
            name: <span style={{ fontSize: "0.9rem" }}> Hết hạn </span>,
            sortable: true,
            cell: (row) => (
                <div className="-w-sale-column">
                    <input
                        type="date"
                        disabled={chooseSales.some(p => p.id === row.id) ? true : false}
                        value={row.end_date || ""}
                        onChange={(e) => {
                            const value = e.target.value;
                            setProducts((prev) =>
                                prev.map((p) =>
                                    p.id === row.id ? { ...p, end_date: value } : p
                                )
                            );
                        }}
                    />
                </div>
            ),
            width: "300px"
        },
        {
            name: <span style={{ fontSize: "0.9rem" }}> Tình trạng </span>,
            sortable: true,
            cell: (row) => (
                <div>
                    {row.end_date ? 'Đang khuyến mãi' : 'Chưa có'}
                </div>
            ),
            width: "200px"
        }
    ]

    return (
    <>
        <div className="wrap-sale">
            <div className="-w-sale-left">
                <h3>Danh sách sản phẩm</h3>
                <div className="-w-sale-btn">
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" 
                            checked={selectAll}
                            onChange={handleSelectAll}
                        />Tất cả
                    </label>
                    <div>
                        <button onClick={handleDeleteSale}>Hủy khuyến mãi</button>
                        <button onClick={handleUpdateSale}>Áp dụng khuyến mãi</button>
                    </div>
                </div>

                <div className="-w-sale-product-list">
                    <DataTable
                        columns={columns}
                        data={products}
                        fixedHeader
                        fixedHeaderScrollHeight="100%"
                        responsive
                        highlightOnHover
                        striped
                        pagination={false}
                    />
                </div>
            </div>
        </div>     
    </>
    )
}