import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import FadeInLeft from './FadeInLeft';
import rightArrow from './media/rightArrow.json';
import leftArrow from './media/leftArrow.json';
import Lottie from 'react-lottie';
import './css-files/projects.css'



export const ImagesSlider = ({slides}) => {


    return (
      
      <div className='images-slider'>
  <FadeInLeft>
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {slides.slice(0,3).map((slide) => (
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.title} className='responsive-img'/>
            <div className='slide-caption'>
              <p className='slide-p'>{slide.subTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="custom-next">
      <Lottie
        options={{ animationData: rightArrow, autoplay: false, loop: false }}
        className='right-arrow'
      />
    </div>
    <div className="custom-prev">
      <Lottie
        options={{ animationData: leftArrow, autoplay: false, loop: false }}
        className='left-arrow'
      />
    </div>
  </FadeInLeft>
</div>

    )
}

