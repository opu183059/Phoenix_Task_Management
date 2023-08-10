import { FaFacebookMessenger,FaCheckCircle } from "react-icons/fa";
import Lottie from "react-lottie";
import supportLottie from "../../../assets/Lotties/support.json";

const SupportSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: supportLottie, // Your animation JSON data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="my-5 md:flex md:justify-between px-5 md:px-20 md:items-center">
      <div className="">
        <p className="text-white p-3 mb-4 bg-orange-700 w-10 rounded-lg">
          {" "}
          <FaFacebookMessenger></FaFacebookMessenger>
        </p>
        <p className="text-orange-700 uppercase">
          #1 Support in the software
        </p>
        <h1 className="text-6xl font-semibold mt-7 mb-9">
          24/7 Real Time <br /> Support.
        </h1>
        <p className="text-gray-700 mb-6">
            Phoenix has the highest rated clint support in the software. <br /> We are here 24 hours a day. Everyday <br /> in the week even in holidays.
        </p>
        <div className="grid grid-cols-2 gap-4">
            <p className="text-orange-700 text-xl flex items-center"><FaCheckCircle></FaCheckCircle><span className="text-gray-700 ml-2 text-base">Email Support</span></p>
            <p className="text-orange-700 text-xl flex items-center"><FaCheckCircle></FaCheckCircle><span className="text-gray-700 ml-2 text-base">Phone Support</span></p>
            <p className="text-orange-700 text-xl flex items-center"><FaCheckCircle></FaCheckCircle><span className="text-gray-700 ml-2 text-base">Live Chat Support</span></p>
        </div>
      </div>
      <div className="">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default SupportSection;
