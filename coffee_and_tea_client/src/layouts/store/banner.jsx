/* eslint-disable no-unused-vars */

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/effect-fade';
import 'swiper/scss/effect-cards';
import { Navigation, Autoplay, EffectCards } from 'swiper/modules';

export const Banner = () => {
    return (
        <>
            <section className="body-store">
                <div className="header-poster">
                    <div className="wrap-swiper-poster">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper swiper-header-poster"
                        >
                            <SwiperSlide className="swiper-slide-poster">
                                <img src="src\assets\image\banner\image_1.png" alt="" />
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide-poster">
                                <img src="src\assets\image\banner\image_2.png" alt="" />
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide-poster">
                                <img src="src\assets\image\banner\image_3.png" alt="" />
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide-poster">
                                <img src="src\assets\image\banner\image_4.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className='wrap-directory'>
                        <div className="-directory">
                            <h1 className="directory-title">Sản phẩm bán chạy nhất</h1>
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
                                        slidesPerView: 4,
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
                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="src\assets\image\6_1734193359.jpeg" alt="" />
                                    <p>Cá betta</p>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="/src/assets/img/store_poster/cavang.png" alt="" />
                                    <p>Cá vàng</p>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="/src/assets/img/store_poster/tepcanh.png" alt="" />
                                    <p>Tép cảnh</p>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="/src/assets/img/store_poster/luathuysinh.png" alt="" />
                                    <p>Lũa thủy sinh</p>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="/src/assets/img/store_poster/phannen.png" alt="" />
                                    <p>Phân nền thủy sinh</p>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="/src/assets/img/store_poster/maylocnuoc.png" alt="" />
                                    <p>Bộ lọc nước</p>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="/src/assets/img/store_poster/denchieu.png" alt="" />
                                    <p>Đèn chiếu thủy sinh</p>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide-directory">
                                    <img src="/src/assets/img/store_poster/vatlieuloc.png" alt="" />
                                    <p>Vật liệu lọc</p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}