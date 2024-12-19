import { faAdd, faDollar, faRecycle, faSubtract, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ListOrder = ({ cartItems }) => {
    // Tính tổng số tiền và tổng số lượng sản phẩm
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="warp-pay-list-order">
                <div className="-wrap-list-order-w">
                    <div className="-warp-list-order">
                        {cartItems.map((item) => (
                            <div key={item.id} className="-w-list-order-item">
                                <div className="-w-list-order-item-img">
                                    <div className="-w-order-checked-img">
                                        <input type="checkbox" name="" id="" />
                                        <img
                                            src={`http://127.0.0.1:8000/storage/products/${item.image ? item.image : "image.png"}`}
                                            alt={item.name}
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                objectFit: 'contain',
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <div>
                                            <p>
                                                <FontAwesomeIcon icon={faTag} />
                                                Giảm giá: {item.promotion || "Không có"}
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faTag}/>
                                                Mã giảm giá: {item.coupon || "Không có"}
                                            </p>
                                            <p>
                                                <FontAwesomeIcon icon={faTag} />
                                                Flash sale: {item.sale || "Không có"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="-w-pay_header-item-2">
                                    <p className="-pay-header-item-2">{item.category}</p>
                                    <p className="-pay-header-item-2">{(item.price).toLocaleString("vi-VN")}đ</p>
                                    <div className="-pay-header-item-2">
                                        <div><FontAwesomeIcon icon={faAdd} /></div>
                                        <span>{item.quantity}</span>
                                        <div><FontAwesomeIcon icon={faSubtract} /></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="-wrap-pay-bottom">
                    <label htmlFor="" className="-pay-bottom-item">
                        <input type="checkbox" />
                        Tất cả
                    </label>
                    <p className="-pay-bottom-item">Sản phẩm ({totalQuantity})</p>
                    <p className="-pay-bottom-item">Tổng số tiền: {totalAmount.toLocaleString("vi-VN")}đ</p>
                    <div className="-pay-bottom-item">
                        <button>
                            Thanh toán
                            <FontAwesomeIcon icon={faDollar} />
                        </button>
                    </div>
                    <div className="-pay-bottom-item">
                        <button>
                            Xóa
                            <FontAwesomeIcon icon={faRecycle} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
