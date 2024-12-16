/* eslint-disable no-unused-vars */
import { faBoxOpen, faCoins, faDollar, faGear, faHistory, faKey, faList, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

export const Orders = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const sideBarRef = useRef(null);

    const handleOpenSideBar = () => setOpenSideBar(prev => !prev);

    const handleClickOutside = (event) => {
        if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
            handleOpenSideBar(); 
        }
    };

    useEffect(() => {
        if (openSideBar) {
            document.addEventListener("mousedown", handleClickOutside);
        }else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openSideBar])


    return (
        <>
            <div className="wrap-dashboard" ref={sideBarRef}>

                <div className={`-dashboard-sidebar ${openSideBar ? 'open' : ''}`} ref={sideBarRef}>
                    <div className="-avatar-box">
                        <img src="src\assets\img\slide_image\image3.png" alt="" />
                        <div>
                            <p>Thanh loi</p>
                            <p className="-change-avatar">Đổi avatar</p>
                        </div>
                    </div>

                    <hr />

                    <div className="-sidebar-list">
                        <ul>
                            <li><FontAwesomeIcon icon={faCoins} />192.000đ</li>
                            <li><Link to={'/user'}><FontAwesomeIcon icon={faUser} />Thông tin</Link></li>
                            <li><Link to={'/user_orders'}><FontAwesomeIcon icon={faBoxOpen} />Đơn hàng</Link></li>
                            <li><Link to={'/user_change_password'}><FontAwesomeIcon icon={faKey} />Đổi mật khẩu</Link></li>
                            <li><Link to={'/user_diposit'}><FontAwesomeIcon icon={faDollar} />Nạp tiền</Link></li>
                            <li><FontAwesomeIcon icon={faSignOut} />Đăng xuất</li>
                        </ul>
                    </div>
                </div>

                <div className="-dashboard-space" ref={sideBarRef}>
                    <div className="wrap-user-info">
                        <div className="-open-sidebar" onClick={handleOpenSideBar}>
                            <p><FontAwesomeIcon icon={faList} /> Menu</p>
                        </div>
                        <h2>
                            <FontAwesomeIcon icon={faBoxOpen} />
                            Đơn hàng
                        </h2>

                        <div className="wrap-user-order">
                            <div className="-user-order-list">

                                <div className="-user-order-item">
                                    <img src="src\assets\img\slide_image\image2.png" alt="" />
                                    <div className="-order-item-info">
                                        <p>Cá chuột caffee</p>
                                        <div className="-order-item-detail">
                                            <div>
                                                <p>Danh mục: cá cảnh</p>
                                                <p>Đơn giá: 5.000đ</p>
                                                <p>Số lượng: 7</p>
                                                <p>Ngày đặt: 27/10/2024</p>
                                            </div>

                                            <div>
                                                Địa chỉ: 26 trần đại nghĩa
                                                <p>Tình trạng: đang giao</p>
                                            </div>

                                            <div>
                                                <p><span>Thành tiền: 35.000đ</span></p>
                                                <button>Hủy đơn</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="-user-order-item">
                                    <img src="src\assets\img\slide_image\image3.png" alt="" />
                                    <div className="-order-item-info">
                                        <p>Tảo đỏ</p>
                                        <div className="-order-item-detail">
                                            <div>
                                                <p>Danh mục: cây thủy sinh</p>
                                                <p>Đơn giá: 1.200đ</p>
                                                <p>Số lượng: 2</p>
                                                <p>Ngày đặt: 27/10/2024</p>
                                            </div>

                                            <div>
                                                Địa chỉ: 26 trần đại nghĩa
                                                <p>Tình trạng: đang giao</p>
                                            </div>

                                            <div>
                                                <p><span>Thành tiền: 2.400đ</span></p>
                                                <button>Hủy đơn</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="-user-order-item">
                                    <img src="src\assets\img\slide_image\image1.png" alt="" />
                                    <div className="-order-item-info">
                                        <p>Cá lồng bàn</p>
                                        <div className="-order-item-detail">
                                            <div>
                                                <p>Danh mục: cá cảnh</p>
                                                <p>Đơn giá: 20.000đ</p>
                                                <p>Số lượng: 1</p>
                                                <p>Ngày đặt: 27/10/2024</p>
                                            </div>

                                            <div>
                                                Địa chỉ: 26 trần đại nghĩa
                                                <p>Tình trạng: đang giao</p>
                                            </div>

                                            <div>
                                                <p><span>Thành tiền: 20.000đ</span></p>
                                                <button>Hủy đơn</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}