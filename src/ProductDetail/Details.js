import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

// install Virtual module
SwiperCore.use([Virtual]);

const Details = () => {
    // Create array with 1000 slides
    const slides = Array.from({ length: 10 }).map((el, index) => `Slide ${index + 1}`);
    console.log(slides)
    return (
        <Swiper spaceBetween={50} slidesPerView={3} virtual>
            {slides.map((slideContent, index) => {
                return (<SwiperSlide key={slideContent} virtualIndex={index}>{slideContent}</SwiperSlide>)
            })}
        </Swiper>
    );
};

export default Details