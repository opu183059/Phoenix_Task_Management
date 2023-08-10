import parallaxImg from "../../../assets/Images/paralax.jpeg";

const ParaluxSection = () => {
  return (
    <div className="relative md:h-[44rem]">
      <div
        className="absolute inset-0 z-[-1] bg-fixed bg-cover"
        style={{
          backgroundImage: `url(${parallaxImg})`,
        }}
      ></div>

      <div className="flex flex-col items-center justify-center md:h-[40rem]">
        <h1 className="text-4xl font-bold text-white">A task manager you can trust for life</h1>
        <p className="text-lg text-white mt-4">
        Gain calmness and clarity with the world’s most beloved productivity app
        </p>
        <button className="mt-10 bg-gradient-to-r from-orange-400 to-orange-950 hover:from-orange-600 hover:to-black text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">Join Us !</button>
      </div>
    </div>
  );
};

export default ParaluxSection;
