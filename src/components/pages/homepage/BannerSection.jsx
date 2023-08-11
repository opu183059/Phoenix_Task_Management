import phoeniximg from '../../../assets/banner/phoenix_banner_img.png'
import banner_img1 from '../../../assets/banner/banner_img1.png'
import banner_img2 from '../../../assets/banner/banner_img2.png'
import banner_img3 from '../../../assets/banner/banner_img3.png'
const BannerSection = () => {
  return (
    <div className="h-screen flex flex-col-reverse lg:flex-row justify-center items-center mb-3">
    <div className='mx-auto'>
    <div className=' flex flex-col gap-3 justify-center mx-aut'>
    <img src={phoeniximg} alt="" className='w-full'/>
    <p className='text-xl  text-black'>Streamline Your Productivity with <br /> Our Task Management System – <br />Stay Organized, Efficient, and <br />On Top of Your Goals!</p>
    <div className='flex gap-4'>
      <button className='btn-sm bg-orange-500 hover:bg-orange-600 text-white rounded-lg'>Get Started</button>
      <button className='btn-sm btn-outline border-2 border-orange-500 hover:bg-orange-600 hover:text-white hover:border-none text-black rounded-lg'>See Demo</button>
    </div>
    </div>
    </div>

   
    <div className="relative w-[50%] h-[80%] p-6 my-3 lg:my-0">
      <img
        src={banner_img2}
        alt="Background"
        className="absolute w-[70%] lg:w-[50%] lg:h-[80%] object-cover"
      />
      <img
        src={banner_img1}
        alt="Overlay"
        className="absolute top-0 -left-10 w-[60%] h-[20%] lg:-top-8 lg:-left-12 lg:w-[50%] lg:h-[20%]"
      />
      <img
        src={banner_img3}
        alt="Overlay"
        className="absolute bottom-5 left-20 w-[60%] h-[30%] lg:bottom-4 lg:left-40 lg:w-[50%] lg:h-[35%]"
      />
    </div>
   
    </div>
  );
};

export default BannerSection;
