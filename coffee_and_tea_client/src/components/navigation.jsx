/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStore, faMagnifyingGlass,
         faRightToBracket, faPhone,
         faIndustry} from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from '../hooks/navigation';

import { Link } from 'react-router-dom';

export default function NavigationBar(){
    const { sidebarIcon, isSidebarOpen, handleShowSidebar } = useSidebar();

    return (
        <header className="header">
            <div className="wrap-header-contents">
                <div className="logo" ><img src="/image.png" alt="logo"/></div>

                <ul className={`nav-ul ${isSidebarOpen ? 'open' : ''}`}>
                    <li>
                        <Link className="index" to="/">
                            <FontAwesomeIcon icon={faHouse} size="sm" />
                            Trang chủ
                        </Link>
                    </li>
                    <li>
                        <Link className="store" to="/store">
                            <FontAwesomeIcon icon={faStore} size="sm" />
                            Cửa hàng
                        </Link>
                    </li>
                    {/* <li>
                        <Link className="instruct" to="/post">
                            <FontAwesomeIcon icon={faIndustry} size="sm" />
                            Hướng dẫn
                        </Link>
                    </li> */}
                    <li>
                        <Link className="instruct" to="/contact">
                            <FontAwesomeIcon icon={faPhone} size="sm" />
                            Liên hệ
                        </Link>
                    </li>
                    <li id='search-li'>
                        <div className="search-bar">
                            <input type="text" placeholder="Tìm kiếm"/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </li>
                    <li id='login-btn-li'>
                        <Link className="sidebar-login-form" to={'/login'}>
                            <FontAwesomeIcon icon={faRightToBracket} />
                            Đăng nhập
                        </Link>
                    </li>
                </ul>

                <div className='wrap-login-btn'>
                    <button className="login-btn" type="submit">
                        <Link to={'/login'}>Đăng nhập</Link>
                    </button>
                </div>
                
                <div className="wrap-account-menu">
                    <img src="" alt="avatar"/>
                </div>

                <div className="sidebar-btn">
                    <FontAwesomeIcon icon={sidebarIcon} size='2xl' onClick={handleShowSidebar}/>
                </div>
            </div>

            {/* ACCOUNT DROPDOWN MENU */}
            <div className="wrap-dropdown-account-menu">
                <ul className="sidebar-ul">
                    <li><a href="#">Đơn hàng</a></li>
                    <li><a href="#">Lịch sử giao dịch</a></li>
                    <li><a href="#">Cài đặt chung</a></li>
                    <li><a href="#">Đăng xuất</a></li>
                </ul>
            </div>
        </header>
    );
}