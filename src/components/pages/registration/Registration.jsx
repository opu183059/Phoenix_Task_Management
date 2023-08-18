/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import showAnimation from "../../../assets/animation/animation_lk7w5h5n.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
const Registration = () => {
  const { registerUser, logout, auth } = useContext(Authcontext);
  const [errorMgs, setErrorMgs] = useState(" ");
  const navigate = useNavigate();
  const handleRegistration = async (event) => {
    // console.log(registerUser);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      if ((email, password)) {
        registerUser(email, password)
          .then((result) => {
            console.log(result);
            Swal.fire({
              icon: "success",
              title: "Congratulations",
              text: "Account Created Successfully goto login",
            });

            updateProfile(auth.currentUser, {
              displayName: name,
              // photoURL: photo,
            })
              .then((result) => {
                // console.log(result);
              })
              .catch((error) => {
                console.log(error);
              });

            logout()
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            let errrormessage = error?.code?.split("auth/")[1];
            setErrorMgs(errrormessage);
          });
      }
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
        onSubmit={handleRegistration}
        action=""
        noValidate=""
        className="md:w-6/12 w-10/12 flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-sky-950 rounded-md text-gray-50"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <h1 className="text-2xl text-sky-300 font-semibold">
              Registration
            </h1>
            <div className="col-span-full">
              <label htmlFor="firstname" className="text-sm text-gray-50">
                Name
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                placeholder="Your Full Name"
                className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm text-gray-50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="sellerEmail" className="text-sm text-gray-50">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full w-full text-left mt-3">
              <p>
                Have an account? goto{" "}
                <Link
                  to={"/login"}
                  className=" hover:underline hover:text-sky-500"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="col-span-full w-full text-left mt-3">
              <input
                //   onClick={save}
                type="submit"
                value="Register"
                className="px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase text-gray-50"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Registration;
