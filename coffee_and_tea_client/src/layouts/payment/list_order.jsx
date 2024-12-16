import { faAdd, faDollar, faRecycle, faSubtract, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const ListOrder = () => {
    return (
        <>
            <div className="warp-pay-list-order">
                <div className="-wrap-list-order-w">
                    <div className="-warp-list-order">
                        
                        <div className="-w-list-order-item">

                            <div className="-w-list-order-item-img">
                                <div className="-w-order-checked-img">
                                    <input type="checkbox" name="" id="" />
                                    <img src="src\assets\img\slide_image\rau_ma_du.png" alt="" />
                                </div>
                                <div>
                                    <h4>Rau má dù thủy sinh</h4>
                                    <div>
                                        <p>
                                            <FontAwesomeIcon icon={faTag} />
                                            Giảm giá: 10%
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faTag}/>
                                            Mã giảm giá: -20%
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faTag} />
                                            Flash sale: 0
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="-w-pay_header-item-2">
                                <p className="-pay-header-item-2">Cây thủy sinh</p>
                                <p className="-pay-header-item-2">10.000đ</p>
                                <p className="-pay-header-item-2">
                                    <div><FontAwesomeIcon icon={faAdd} /></div>
                                    <p>16</p>
                                    <div><FontAwesomeIcon icon={faSubtract} /></div>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="-wrap-pay-bottom">
                    <label htmlFor="" className="-pay-bottom-item">
                        <input type="checkbox" />
                        Tất cả
                    </label>
                    <p className="-pay-bottom-item">Sản phẩm (3)</p>
                    <p className="-pay-bottom-item">Tổng số tiền: 40.000đ</p>
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
    )
}