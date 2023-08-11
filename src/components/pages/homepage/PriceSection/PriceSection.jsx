const PriceSection = () => {
  return (
    <div className="bg-slate-50 lg:p-4 min-h-screen">
      <h2 className="uppercase text-center text-2xl font-bold text-slate-600">
        pricing
      </h2>
      <p className="text-center text-slate-500">
        choose your comfortable price for our price range
      </p>
      <div className="lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 mt-4">
        <div className="hover:scale-110 transition duration-200 mt-4 card mx-2 lg:mx-auto h-96 full lg:w-80 rounded-lg bg-gradient-to-bl to-emerald-500 from-yellow-400  text-primary-content">
          <div className="card-body p-4 w-full ">
            <div className="text-opacity-50 relative">
              <h2 className="text-opacity-50 card-title uppercase text-5xl font-bold text-white">
                basic
              </h2>
              <p className=" text-opacity-20 text-8xl mt-4 font-bold text-white border-b-2">
                FREE
              </p>
              <p className="text-5xl -mt-16  font-bold text-white absolute">
                $0
              </p>
            </div>
            <p className="text-white mt-4">Feature 1</p>
            <p className="text-white">Feature 2</p>
            <p className="text-white ">Feature 3</p>
            <div className="mt-4 w-full text-center">
              <button className="btn mx-auto bg-slate-200 hover:bg-orange-600 bg-opacity-50 px-4 py-2 rounded-xl text-white">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>

        <div className=" hover:scale-110 transition duration-200 shadow-2xl mt-4 card lg:mx-auto mx-2 h-96 lg:w-80 rounded-lg bg-gradient-to-bl to-orange-500 from-yellow-400  text-primary-content">
          <div className="card-body p-4 hover:scale-100">
            <div className="text-opacity-50 relative">
              <h2 className="text-opacity-50 card-title uppercase text-5xl font-bold text-white">
                pro
              </h2>
              <p className=" text-opacity-20 text-8xl mt-4 font-bold text-white border-b-2">
                250
              </p>
              <p className="text-5xl -mt-16  font-bold text-white absolute">
                $250
              </p>
            </div>
            <p className="text-white mt-4">Feature 1</p>
            <p className="text-white">Feature 2</p>
            <p className="text-white ">Feature 3</p>
            <div className="mt-4 w-full text-center">
              <button className="btn mx-auto bg-slate-200 hover:bg-orange-600 bg-opacity-50 px-4 py-2 rounded-xl text-white">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>

        <div className=" hover:scale-110 transition duration-200 mt-4 card lg:mx-auto mx-2 h-96 lg:w-80 rounded-lg bg-gradient-to-bl to-emerald-500 from-yellow-400  text-primary-content">
          <div className="card-body p-4 hover:scale-100 ">
            <div className="text-opacity-50 relative">
              <h2 className="text-opacity-50 card-title uppercase text-5xl font-bold text-white">
                unlimited
              </h2>
              <p className=" text-opacity-20 text-8xl mt-4 font-bold text-white border-b-2">
                500
              </p>
              <p className="text-5xl -mt-16  font-bold text-white absolute">
                $500
              </p>
            </div>
            <p className="text-white mt-4">Feature 1</p>
            <p className="text-white">Feature 2</p>
            <p className="text-white ">Feature 3</p>
            <div className="mt-4 w-full text-center">
              <button className="btn mx-auto hover:bg-orange-600 bg-slate-200 bg-opacity-50 px-4 py-2 rounded-xl text-white">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
