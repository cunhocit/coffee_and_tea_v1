import { faAdd, faTags, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useCart } from "../../hooks/CartContext";

export const ProducInfo = ({ data, isLoading, id }) => {
    const [quantity, setQty] = useState(1);
    const { addToCart } = useCart();

    const upQty = () => setQty(quantity + 1);
    const lowQty = () => quantity > 1 && setQty(quantity - 1);

    const product = data.find(item => item.id === parseInt(id));

    if (isLoading) return <p>Đang tải...</p>;
    if (!product) return <p>Không tìm thấy sản phẩm.</p>;

    return (
        <div className="wrap-product-info">
            <img src={`http://127.0.0.1:8000/storage/products/${product.image ? product.image : 'image.png'}`} alt={product.name} />

            <div className="-detal-info">
                <h4>Chi tiết sản phẩm</h4>
                <p className="-name">{product.name}</p>
                <div className="-detail-post">
                    <p>{product.purchaseCount} lượt mua</p> | 
                    <p>{product.commentCount} bình luận</p>
                </div>

                <div className="-detail-text">
                    <h4>Mô tả sản phẩm:</h4>
                    <p>{product.description}</p>
                </div>

                <div className="-detail-sale-code">
                    <FontAwesomeIcon icon={faTags} />
                    <p>Khuyến mãi: {product.promotion || "Không có"}</p>
                </div>

                <div className="-detail-quantity">
                    <p>Số lượng: </p>
                    <div>
                        <p><FontAwesomeIcon icon={faAdd} onClick={upQty} /></p>
                        <p>{quantity}</p>
                        <p><FontAwesomeIcon icon={faSubtract} onClick={lowQty} /></p>
                    </div>
                </div>

                <h2 className="-detail-price">Giá: {product.price?.toLocaleString("vi-VN")}đ</h2>

                <div className="-detail-controll">
                    <button onClick={() => addToCart(product, quantity)}>+ Giỏ hàng</button>
                    <button>Mua ngay</button>
                </div>
            </div>
        </div>
    );
};
