/* eslint-disable no-unused-vars */
import { faProductHunt } from "@fortawesome/free-brands-svg-icons"
import { faBoxes, faShuffle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/effect-fade';
import 'swiper/scss/effect-cards';
import { Navigation, Autoplay, EffectCards } from 'swiper/modules';


export const ProductRelated = () => {
    return (
        <>
            <div className="wrap-product-related">
                <p>
                    <FontAwesomeIcon icon={faShuffle} />
                    Sản phẩm liên quan
                </p>
                <hr />

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
                        <img src="/src/assets/img/store_poster/cabeta.png" alt="" />
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
        </>
    )
}