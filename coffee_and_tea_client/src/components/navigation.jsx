/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStore, faMagnifyingGlass,
         faRightToBracket, faPhone,
         faIndustry} from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from '../hooks/navigation';

import { Link } from 'react-router-dom';

export default function NavigationBar(){
    const { sidebarIcon, isSidebarOpen, handleShowSidebar } = useSidebar();
    const JWT_TOKEN = localStorage.getItem('jwt_token_customer');

    return (
        <header className="header">
            <div className="wrap-header-contents">
                <div className="logo">
                    <img src="/image.png" alt="logo"/>
                </div>

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
                    <li>
                        <Link className="instruct" to="/post">
                            <FontAwesomeIcon icon={faIndustry} size="sm" />
                            Hướng dẫn
                        </Link>
                    </li>
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
                    <li id='login-btn-li' style={{display: !JWT_TOKEN ? 'flex' : 'none'}}>
                        <Link to={'/login'}>
                            <FontAwesomeIcon icon={faRightToBracket} />
                            Đăng nhập
                        </Link>
                    </li>
                    <li className="wrap-account-menu-2" style={{display: JWT_TOKEN ? 'flex' : 'none'}}>
                        <div>
                            <h4>Thanh Loi</h4>
                            <Link to={'/user'}>Thông tin cá nhân</Link>
                        </div>
                        <img src="src\assets\img\image1.png" alt="avatar"/>
                    </li>
                </ul>

                <div className="sidebar-btn">
                    <FontAwesomeIcon icon={sidebarIcon} size='2xl' onClick={handleShowSidebar}/>
                </div>
            </div>
        </header>
    );
}