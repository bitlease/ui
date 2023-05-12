import lendingImage from "../assets/imaqes/money-transfer.svg";
import '../styles/HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-container flex items-center max-w-[1024px] h-[80vh] mx-auto py-8">

        {/* Heading */}
      <div className="hero-heading-holder w-1/2">
        <h1 className="text-6xl m-0 font-bold">Bitlease</h1>
        <p className="mt-2">
          An Interactive Web3 Lending and<br></br> borrowing platform
        </p>
        <div className="w-[120px] h-1 bg-purple-700 mt-2"></div>
      </div>

        {/* Image */}
      <div className="hero-image-holder w-1/2">
        <img src={lendingImage} alt="lending and borrowing" />
      </div>
    </div>
  );
};

export default HeroSection;
