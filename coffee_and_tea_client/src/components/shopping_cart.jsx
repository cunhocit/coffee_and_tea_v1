import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/CartContext";

export const ShopingCart = ({ shopCart, handleOpenShopCart }) => {
    const cartRef = useRef(null);
    const { cartItems, setCartItems } = useCart();  // Chắc chắn rằng setCartItems được truyền đúng

    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            handleOpenShopCart();
        }
    };

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } : item
            )
        );
    };

    useEffect(() => {
        if (shopCart) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [shopCart]);

    return (
        <div className={`wrap-shopping-cart ${!shopCart ? "hidden" : ""}`} ref={cartRef}>
            <div className="shopping-cart-box">
                <h2>
                    <div>
                        <FontAwesomeIcon icon={faCartShopping} />
                        Giỏ hàng
                    </div>
                    <FontAwesomeIcon icon={faX} onClick={handleOpenShopCart} />
                </h2>
                <hr />
                {cartItems.length > 0 ? (
                    <div className="shopping-cart-item">
                        {cartItems.map((item) => (
                            <div key={item.id} className="wrap-cart-item">
                                <img src={`http://127.0.0.1:8000/storage/products/${item.image ? item.image : 'image.png'}`}
                                alt={item.name} 
                                style={{
                                    width: '120px',           
                                    height: '120px',           
                                    objectFit: 'contain',      
                                    display: 'block',   
                                  }}
                                />
                                <div className="-cart-info">
                                    <p>{item.name}</p>
                                    <label className="-cart-info-item" htmlFor="">
                                        Số lượng:
                                        <input
                                            type="number"
                                            min={1}
                                            max={100}
                                            value={item.quantity}
                                            placeholder="Số lượng"
                                            onChange={(e) =>
                                                handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                                            }
                                        />
                                    </label>
                                    <p>Giá: {(item.price * item.quantity).toLocaleString("vi-VN")}đ</p>
                                    <p>Khuyến mãi: {item.promotion || "Không có"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Giỏ hàng của bạn hiện đang trống.</p>
                )}
                <Link to="/payment">Thanh toán ngay</Link>
            </div>
        </div>
    );
};
