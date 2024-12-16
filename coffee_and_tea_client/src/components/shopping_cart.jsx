/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"

export const ShopingCart = ({shopCart, handleOpenShopCart}) => {
    const cartRef = useRef(null);
    
    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            handleOpenShopCart(); 
        }
    };

    useEffect(() => {
        if (shopCart) {
            document.addEventListener("mousedown", handleClickOutside);
        }else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [shopCart])

    return (
        <>
            <div className={`wrap-shopping-cart ${!shopCart ? 'hidden' : ''}`} ref={cartRef}>
                <div className="shopping-cart-box">
                    <h2>
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} />
                            Giỏ hàng
                        </div>
                        <FontAwesomeIcon icon={faX} onClick={handleOpenShopCart}/>
                    </h2>

                    <hr />

                    <div className="shopping-cart-item">

                        <div className="wrap-cart-item">
                            <img src="src\assets\img\slide_image\beta.png" alt="" />
                            <div className="-cart-info">
                                <p>Cá beta</p>
                                <label className="-cart-info-item" htmlFor="">Số lượng:
                                    <input type="number" min={0} max={100} placeholder="Số lượng"/>
                                </label>
                                <p className="-cart-info-item">Giá: 19.999đ</p>
                                <p className="-cart-info-item">Khuyến mãi: 20%</p>
                            </div>
                        </div>

                    </div>

                    <Link >Thanh toán ngay</Link>
                </div>
            </div>
        </>
    )
}