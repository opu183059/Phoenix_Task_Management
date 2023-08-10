import { Link } from "react-router-dom";
import logo from "../../assets/phoenix_logo_without_bg.png";
import logotext from '../../assets/phoenix_name.png'

const Navbar = () => {
  return (

    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About Us</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
  <Link to={"/"}>
  <div className="flex items-center gap-1">
    <img  src={logo} className="w-[40px] h-[45px]"/>
   <img src={logotext} alt="" />
    </div>
  </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-medium">
    <li><a>About Us</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-orange-400 text-white hover:bg-orange-600">Login</a>
  </div>
</div>
  );
};

export default Navbar;
