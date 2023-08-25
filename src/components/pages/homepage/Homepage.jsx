import BannerSection from "./BannerSection";
import Contact from "./Contact";
import ExtraSection from "./ExtraSection/ExtraSection";
import FreeSignUp from "./FreeSignUp";
import ParaluxSection from "./ParaluxSection";
import PriceSection from "./PriceSection/PriceSection";

// import SpecialSection from "./SpecialSection/SpecialSection";
import Steps from "./Steps";
import SupportSection from "./SupportSection";
import TrackSection from "./TrackSection";


const Homepage = () => {
  return (
    <div className="min-h-screen md:pt-20">
      <BannerSection></BannerSection>
      <ParaluxSection></ParaluxSection>
      <SupportSection></SupportSection>
      <ExtraSection></ExtraSection>
      <TrackSection></TrackSection>
      <Steps></Steps>
      
      <PriceSection></PriceSection>
      {/* <SpecialSection></SpecialSection> */}
      <Contact></Contact>
      <FreeSignUp></FreeSignUp>
    </div>
  );
};

export default Homepage;
