/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import showAnimation from "../../../assets/animation/animation_lk7w5ouy.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signinwithGoogle, emailLogin, user } = useContext(Authcontext);
  const [errMgs, setErrMgs] = useState("");
  const [showpass, setShowpass] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      emailLogin(email, password)
        .then((result) => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          navigate(from);
        })
        .catch((error) => {
          console.log(error);
          let errrormessage = error.code.split("auth/")[1];
          setErrMgs(errrormessage);
        });
    } catch (error) {
      alert("Registration failed.");
    }
    form.reset();
  };
  return (
    <div className="md:flex max-w-6xl mx-auto pt-24  items-center">
      <div className="md:w-6/12">
        <Lottie animationData={showAnimation} loop={true} className="w-10/12" />
      </div>
      <form
        onSubmit={handleLogin}
        action=""
        noValidate=""
        className="md:w-6/12 w-10/12 flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-sky-950 rounded-md text-gray-50"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <h1 className="text-2xl text-sky-300 font-semibold">Login</h1>

            <div className="col-span-full">
              <label
                htmlFor="sellerEmail"
                className="text-left text-sm text-gray-50"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="asif@gmail.com"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="sellerEmail"
                className="text-left text-sm text-gray-50"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full w-full text-left mt-3">
              <p>
                Don't have an account? goto{" "}
                <Link
                  to={"/registration"}
                  className=" hover:underline hover:text-sky-500"
                >
                  Registration
                </Link>
              </p>
            </div>
            <div className="col-span-full w-full text-left mt-3">
              <input
                //   onClick={save}
                type="submit"
                value="Login"
                className="px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase text-gray-50"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
