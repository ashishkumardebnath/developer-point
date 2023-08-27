import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import musicApp from '../../img/musicapp.png'
import 'swiper/css'
import { useContext } from 'react';
import { themeContext } from '../../Context'
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMood = theme.state.darkMood;
    return (
        <div className='portfolio' id='Portfolio'>
            {/* heading */}
            <span style={{ color: darkMood ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicApp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;