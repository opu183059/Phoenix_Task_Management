import { Link } from "react-router-dom";
import logo from "../../assets/phoenix_logo_without_bg.png";
import logotext from "../../assets/phoenix_name.png";
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";

const Navbar = () => {

  const { user, logout } = useContext(Authcontext);
  // console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems=<div className="md:flex">
 <li><Link to={"/"}>Home</Link></li>
 <li><Link to={"/"}>Pricing</Link></li>
 <li><Link to={"/"}>futures</Link></li>
 <li><Link to={"/"}>Contact Us</Link></li>
 <li><Link to={'workspaces'}>WorkSpaces</Link></li>
 <li><Link to={"/registration"}>  Registration</Link></li>
 
  </div>
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
              navItems
            }
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex items-center gap-1">
            <img src={logo} className="w-8 h-8" />
            <img src={logotext} alt="" className="w-16" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {
            navItems
            
          }
      
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <h1 className="mr-1 font-semibold text-base border-2 px-3 py-1 rounded-md">
              {user?.displayName}
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-1 uppercase rounded-2xl bg-orange-400 text-white hover:bg-orange-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to={"/login"}
            className="px-4 py-1 uppercase rounded-2xl bg-orange-400 text-white hover:bg-orange-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
