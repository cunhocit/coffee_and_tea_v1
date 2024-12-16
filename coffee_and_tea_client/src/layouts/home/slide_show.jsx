/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export const SlideShow = ({slideShowRef, nextSection}) => {
    return (
        <>
            <section className="wrap-slide-show" ref={slideShowRef}>
                <div className="wrap-swiper">
                    <h1>Một số sản phẩm của chúng tôi</h1>

                    <Swiper effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={'true'}
                            speed={1000}

                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}

                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            className="mySwiper home-swiper"
                    >
                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\1_1734192715.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\2_1734192942.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\3_1734193010.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\7_1734193524.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\4_1734194446316.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\14_1734194025.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\13_1734193989.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\5_1734193286.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\12_1734193952.jpeg" alt="" /></SwiperSlide>

                        <SwiperSlide className="home-swiper-slide">
                            <img src="src\assets\image\10_1734193826.jpg" alt="" /></SwiperSlide>
                    </Swiper>

                    <div className="about-us-next" onClick={nextSection}>
                        <a>Cửa hàng</a>
                    </div>
                </div>
            </section>
        </>
    )
}