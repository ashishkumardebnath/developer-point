import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} style={{ width: '100%' }} alt="" />
            <div className='f-content'>
                <span>blueboyashish@gmail.com</span>
                <div className='f-icons'>
                    <Insta color="white" size="3rem"></Insta>
                    <Facebook color="white" size="3rem"></Facebook>
                    <Github color="white" size="3rem"></Github>
                </div>
            </div>
        </div >
    );
};

export default Footer;