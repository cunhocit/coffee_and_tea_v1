/* eslint-disable no-unused-vars */
import { faAdd, faTags } from "@fortawesome/free-solid-svg-icons"
import { faSubtract } from "@fortawesome/free-solid-svg-icons/faSubtract";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const ProducInfo = () => {
    const [quantity, setQty] = useState(1);
    const upQty = () => setQty(quantity + 1);
    const lowQty = () => {
        if (quantity > 0) {
            setQty(quantity - 1);
        }
    }
    return (
        <>
            <div className="wrap-product-info">
                <img src="src\assets\image\6_1734193359.jpeg" alt="" />

                <div className="-detal-info">
                    <h4>Chi tiết sản phẩm</h4>
                    <p className="-name">[Cá beta bò sữa]</p>
                    <div className="-detail-post">
                        <p>8282 lượt mua</p> | 
                        <p>27 bình luận</p>
                    </div>

                    <div className="-detail-text">
                        <h4>Mô tả sản phẩm:</h4>
                        <p>
                        Cá Betta bò sữa là dòng cá cảnh được yêu thích nhờ vẻ đẹp độc đáo, màu sắc trắng đen giống như họa tiết của bò sữa.

                        Đặc điểm nổi bật:
                            Kích thước nhỏ gọn, dễ nuôi trong bể thủy sinh hoặc bình thủy tinh.
                            Sống động, thích hợp làm điểm nhấn cho không gian sống.
                            Khả năng thích nghi tốt với môi trường nước ngọt.

                        Hướng dẫn chăm sóc:
                            Thay nước định kỳ 2-3 ngày/lần.
                            Cung cấp thức ăn dạng viên hoặc giun đông lạnh để đảm bảo dinh dưỡng.
                            Không nuôi chung với các loại cá hung dữ để tránh tổn thương.
                        </p>
                    </div>

                    <div className="-detail-sale-code">
                        <FontAwesomeIcon icon={faTags} />
                        <p>Khuyến mãi: Không có</p>
                    </div>
                    
                    <div className="-detail-quantity">
                        <p>Số lượng: </p>
                        <div>
                            <p><FontAwesomeIcon icon={faAdd} onClick={upQty} /></p>
                            <p>{quantity}</p>
                            <p><FontAwesomeIcon icon={faSubtract} onClick={lowQty}/></p>
                        </div>
                    </div>

                    <h2 className="-detail-price">Giá: 150.000đ</h2>

                    <div className="-detail-controll">
                        <button>+ Giỏ hàng</button>
                        <button>Mua ngay</button>
                    </div>
                </div>
            </div>
        </>
    )
}