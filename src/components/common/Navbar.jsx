import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="flex justify-between max-w-6xl mx-auto p-3">
        <div className="logo">
          <Link
            to={"/"}
            className="text-orange-700 font-bold uppercase text-xl"
          >
            Phoenix
          </Link>
        </div>
        <div className="menu">
          <ul className="flex gap-3">
            <li>
              <Link to={"/"}>Homepage</Link>
            </li>
            <li>
              <Link to={"/login"}>L ogin</Link>
            </li>
            <li>
              <Link to={"/registration"}>  Registration</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
