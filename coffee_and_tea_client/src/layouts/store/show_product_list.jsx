import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ShowProductList = () => {
    return (
        <>
            <section className="wrap-show-product-list">
                <div className="title-show-product">
                    <p>Một số sản phẩm của chúng tôi</p>
                    <hr />
                </div>

                <div className="util-wrap-list-product">
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
                </div>

                <div className="explore-btn"><p>Xem thêm</p></div>
            </section>
        </>
    )
}