import './Works.css'
import upwork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'
import { useContext } from 'react';
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
const Works = () => {
    const transition = { duration: 3.5, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMood = theme.state.darkMood;
    return (
        <div className='works'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMood ? 'white' : '' }}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                    <br />
                    enim earum quam saepe sequi numquam.
                    <br />
                    enim earum quam saepe sequi numquam.adipisicing elit. Commodi
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </span>
                <button className='button s-button'>Hire Me</button>
                <div className='blur s-blur' style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side  */}
            <div className='w-right'>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={transition}

                    className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={upwork} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={fiverr} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={amazon} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={shopify} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={facebook} alt="" />
                    </div>
                </motion.div>
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    );
};

export default Works;