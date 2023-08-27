import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glacess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import { useContext } from 'react';
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
const Services = () => {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMood = theme.state.darkMood;
    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMood ? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi <br /> enim earum quam saepe sequi numquam.</span>
                <button className='button s-button'>Download CV</button>
                <div className='blur s-blur' style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side */}
            <div className="cards">
                {/* 1st card */}
                <motion.div
                    whileInView={{ left: "14rem" }}
                    initial={{ left: "25rem" }}
                    transition={transition}

                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        details={'Figma, Sketch, Photoshop, Adobe,,,Lorem ipsum dolor sit amet consectetur, ,'}
                    />
                </motion.div>

                {/* 2nd card */}
                <motion.div
                    whileInView={{ left: "0rem" }}
                    initial={{ right: "9rem" }}
                    transition={transition}

                    style={{ top: "12rem", left: '-4rem' }}>
                    <Card
                        emoji={Glacess}
                        heading={'Developer'}
                        details={'Html, Css, JavaScript, React,,Lorem ipsum dolor sit amet consectetur,'}
                    />
                </motion.div>

                {/* 3rd card */}
                <motion.div
                    whileInView={{ left: "14rem" }}
                    initial={{ left: "25rem" }}
                    transition={transition}

                    style={{ top: "19rem", left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, libero.'}
                    />
                </motion.div>
                <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>
            </div>
        </div>
    );
};

export default Services;