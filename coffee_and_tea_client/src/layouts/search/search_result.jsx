/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faCartShopping, faClose, faCoffee, faFilter} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { optionAddressProvin } from "../../components/select"

import Select from 'react-select';
import { useEffect, useRef } from "react";

export const SearchResult = ({openFilter, handleOpenFilter}) => {
    const filterRef = useRef(null);
    
    const handleClickOutside = (event) => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            handleOpenFilter(); 
        }
    };

    useEffect(() => {
        if (openFilter) {
            document.addEventListener("mousedown", handleClickOutside);
        }else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openFilter])

    return (
        <>
            <section className="wrap-show-product">

                <div className="-show-product-container">

                    <div className={`wrap-filter-box ${openFilter ? 'open' : ''}`} ref={filterRef}>
                        <div className="box-fillter-component">
                            <div>
                                <FontAwesomeIcon icon={faCoffee} />
                                <h3>Bộ lọc tìm kiếm</h3>
                            </div>
                            <FontAwesomeIcon icon={faClose} style={{display: openFilter ? 'flex' : 'none'}}  onClick={handleOpenFilter}/>
                        </div>

                        <hr />

                        <div className="box-filter-categoires">
                            <p>Danh mục</p>
                            <div>
                                <label htmlFor="">
                                    <input type="checkbox" value={''}/>
                                    Cá cảnh
                                </label>
                                <label htmlFor="">
                                    <input type="checkbox" value={'Cá cảnh'}/>
                                    Cây thủy sinh
                                </label>
                                <label htmlFor="">
                                    <input type="checkbox" value={'Cá cảnh'}/>
                                    Khác
                                </label>
                            </div>
                        </div>

                        <hr />

                        <div className="box-filter-categoires">
                            <p>Hình thức vận chuyển</p>
                            <div>
                                <label htmlFor="">
                                    <input type="checkbox" value={''}/>
                                    Bình thường
                                </label>
                                <label htmlFor="">
                                    <input type="checkbox" value={'Cá cảnh'}/>
                                    Nhanh
                                </label>
                                <label htmlFor="">
                                    <input type="checkbox" value={'Cá cảnh'}/>
                                    Siêu nhanh
                                </label>
                            </div>
                        </div>

                        <hr />

                        <div className="box-filter-price">
                            <p>Khoảng giá</p>
                            <div className="price-about-box">
                                <input type="text" name="" id="" placeholder="Từ 0đ"/>
                                <p>đến</p>
                                <input type="text" name="" id="" placeholder="đến Xđ"/>
                            </div>
                        </div>

                        <hr />

                        <button>Áp dụng</button>

                        <button>Xóa tất cả</button>

                    </div>

                    <div className="wrap-list-product-p">
                        <div className="wrap-list-product">
                            <div className="-w-list-product-item">
                                <div className="box-product">
                                    <img className="img-product" src="https://th.bing.com/th/id/R.a9496a5e138c895e6682f1c2f812e842?rik=H8riI1IinaPhQw&riu=http%3a%2f%2fbettasales.net%2fwp-content%2fuploads%2f2017%2f04%2f11009874_460640844116386_2597940959999715225_n.jpg&ehk=VcSgtX5s2ruFrAkNHy9lEOBfeZSU3HqTAKec8zJvtZQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Beta lavender</p>
                                        
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="-w-list-product-item">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image2.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Combo cá beta</p>
                                        
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="-w-list-product-item">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image2.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Combo cá beta</p>
                                        
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="-w-list-product-item">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image2.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Combo cá beta</p>
                                        
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="-w-list-product-item">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image2.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Combo cá beta</p>
                                        
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="-w-list-product-item">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image2.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Combo cá beta</p>
                                        
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="-w-list-product-item">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image2.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Combo cá beta</p>
                                        
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="explore-btn"><p>Xem thêm</p></div> */}

                    </div>

                </div>

            </section>
        </>
    )
}