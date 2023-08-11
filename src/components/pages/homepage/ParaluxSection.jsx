import parallaxImg from "../../../assets/Images/paralax.jpeg";

const ParaluxSection = () => {
  return (
    <div className="relative md:h-[44rem]">
      <div
        className="absolute inset-0 z-[-1] bg-fixed bg-cover "
        style={{
          backgroundImage: `url(${parallaxImg})`,
        }}
      ></div>

      <div className="flex flex-col items-center justify-center md:h-[40rem] backdrop-blur-[2px]">
        <h1 className="text-4xl font-bold text-white italic">
          A task manager you can trust for life
        </h1>
        <p className="text-lg text-white mt-4 px-10 md:px-20">
          Gain calmness and clarity with the world’s most beloved productivity
          app. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          laboriosam id, dignissimos praesentium iusto unde quibusdam fugit
          deleniti ullam magni! app. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iste laboriosam id, dignissimos praesentium iusto
          unde quibusdam fugit deleniti ullam magni!
        </p>

        <button className="px-4 py-1 mt-10 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
          Join US
        </button>
      </div>
    </div>
  );
};

export default ParaluxSection;
