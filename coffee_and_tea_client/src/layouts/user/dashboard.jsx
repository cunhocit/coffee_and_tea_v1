/* eslint-disable no-unused-vars */
import { faBoxOpen, faCoins, faDollar, faGear, faHistory, faKey, faList, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {
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
                    <div className="wrap-user-info" >
                        <div className="-open-sidebar" onClick={handleOpenSideBar}>
                            <p><FontAwesomeIcon icon={faList} /> Menu</p>
                        </div>
                        <h2>
                            <FontAwesomeIcon icon={faGear} />
                            Quản lý hồ sơ cá nhân
                        </h2>

                        <div className="-box-user-info">
                            <label htmlFor="">Họ và tên
                                <input type="text" name="" id="" />
                            </label>
                            <label htmlFor="">Email
                                <input type="email" name="" id="" />
                            </label>
                            <label htmlFor="">Số điện thoại
                                <input type="phone" name="" id="" />
                            </label>
                            <label htmlFor="">Ngày sinh
                                <input type="date" name="" id="" />
                            </label>
                            <label htmlFor="">Giới tính
                                <select name="" id="">
                                    <option value="">Nam</option>
                                    <option value="">Nữ</option>
                                    <option value="">Khác</option>
                                </select>
                            </label>
                            <label htmlFor="">Địa chỉ
                                <input type="text" name="" id="" />
                            </label>

                            <button>Cập nhật</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}