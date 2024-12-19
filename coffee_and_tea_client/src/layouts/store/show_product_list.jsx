import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProduct";

export const ShowProductList = () => {
    const { data, isLoading } = useProducts(); // Lấy dữ liệu sản phẩm và hàm fetch

    return (
        <section className="wrap-show-product-list">
            <div className="title-show-product">
                <p>Một số sản phẩm của chúng tôi</p>
                <hr />
            </div>

            <div className="util-wrap-list-product">
                <div className="wrap-list-product">
                    {isLoading ? (
                        <p>Đang tải...</p>  // Thông báo khi đang tải
                    ) : data && data.length > 0 ? (
                        data.map((product) => (
                            <div className="-w-list-product-item" key={product.id}>
                                <Link to={`/product_detail/${product.id}`} className="box-product" style={{ color: 'black', textDecoration: 'none' }}>
                                    <img
                                        className="img-product"
                                        src={`http://127.0.0.1:8000/storage/products/${product.image ? product.image : 'image.png'}`}  // Ảnh mặc định nếu không có ảnh
                                        alt={product.name}
                                    />
                                    <div className="info-product">
                                        <p className="name-product">{product.name}</p> {/* Tên sản phẩm */}
                                        <div className="price-product">
                                            <p>
                                                {product.price?.toLocaleString("vi-VN")}<u>đ</u>  {/* Giá sản phẩm */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>Không có sản phẩm nào để hiển thị.</p>  // Thông báo khi không có sản phẩm
                    )}
                </div>
            </div>

            <div className="explore-btn">
                <p>Xem thêm</p>  {/* Nút tải thêm */}
            </div>
        </section>
    );
};
