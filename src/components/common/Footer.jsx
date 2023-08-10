import logo from '../../assets/phoenix_logo_without_bg.png'
import logotext from '../../assets/phoenix_name.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-white text-black">
        <div className='flex items-center mx-auto'>
          <img src={logo} alt="" className='w-[30%] h-[20%]'/>
          <img src={logotext} alt="" className='w-[20%] h-[10%]'/>
        </div>
        <div>
          <span className="footer-title">About Phoenix</span>
          <a className="link link-hover">Whats behind the boards</a>
        </div>
        <div>
          <span className="footer-title">Jobs</span>
          <a className="link link-hover">Learn about open roles <br /> on the Phoenix team</a>
        </div>
        <div className='w-full'>
          <span className="footer-title">Contact Us</span>
          <a className="link link-hover">Need anything? Get in touch and <br /> we can help you.</a>
        </div>
      </footer>
      
      <footer className="footer items-center p-4 bg-white text-gray-800 w-full ">
        <div className='flex flex-col lg:flex-row gap-3 justify-between w-full'>
          <div className="items-center flex  gap-3">
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Copyright © 2023 - All right reserved by Phoenix</p>
          </div>
          <div className='flex gap-3 text-gray-700 text-2xl'>
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            <FaYoutube></FaYoutube>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
