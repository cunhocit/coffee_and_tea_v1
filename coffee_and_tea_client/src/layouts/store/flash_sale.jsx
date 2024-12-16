/* eslint-disable no-unused-vars */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/effect-fade';
import 'swiper/scss/effect-cards';
import { Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClockCountdown from '../../components/countdown';
import { faCloudBolt, faTags, faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const FlashSale = () => {
    return (
        <>  
            <section className="wrap-flash-sale">
                <div className="title-flash-sale">
                        <FontAwesomeIcon icon={faCloudBolt} />
                        <h1>Giảm giá</h1>
                        <ClockCountdown />
                    </div>

                    <div className="wrap-directory">
                        <div className='-directory'>
                        <Swiper
                            centeredSlides={true}
                            grabCursor={true}
                            loop={true}
                            speed={1000}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                481: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    spaceBetween: 10,
                                },
                                }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay]}
                            className="mySwiper swiper-directory"
                        >
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image2.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Cá chuột cafe</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image3.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Tảo đỏ</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/slide_image/image4.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Bể cá mini</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/image5.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Cá dĩa</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/image1.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Cá koi</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/image2.jpg" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Cá vàng</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/image3.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Cá koi</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide-flash-sale">
                                <div className="box-product">
                                    <img className="img-product" src="/src/assets/img/image6.png" alt="" />
                                    <div className="info-product">
                                        <p className="name-product">Tán lá xanh</p>
                                        <div className="down-price-product">
                                            <FontAwesomeIcon icon={faTags} />
                                            <p>-20%</p>
                                            <p><s>150.000<u>đ</u></s></p>
                                        </div>
                                        <div className="price-product">
                                            <p>99.000<u>đ</u></p>
                                        </div>
                                    </div>
                                    <div className="-add-cart-shop">
                                        <FontAwesomeIcon icon={faCartShopping}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
            </section>
        </>
    )
}