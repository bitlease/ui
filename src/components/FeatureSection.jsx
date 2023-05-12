import borrow from "../assets/imaqes/borrow.svg";
import lend from "../assets/imaqes/lend.svg";
import earnInterest from "../assets/imaqes/earn-interest.svg";
import '../styles/FeatureSection.css'


const FeatureSection = () => {
  return (
    <div className="feature-container flex flex-col items-center bg-[#2E4F4F] py-10">
      <h2 className="text-white font-bold text-3xl mt-20">Our Features</h2>
      <div className="feature-card-holder flex text-white my-[50px] max-w-[1024px] gap-10">

        {/* Borrow */}
        <div className="w-[300px] h-[300px] border-white border flex flex-col items-center ">
          <div className="w-[80%] h-[80%] p-6">
            <img src={borrow} className="w-[100%] h-[100%] object-contain" />
          </div>
          <p>Borrow</p>
        </div>

        {/* Lend */}

        <div className="w-[300px] h-[300px] border-white border flex flex-col items-center">
          <div className="w-[80%] h-[80%] p-6">
            <img src={lend} className="w-[100%] object-cover" />
          </div>
          <p>Lend</p>
        </div>

        {/* Earn interest */}

        <div className="w-[300px] h-[300px] border-white border flex flex-col items-center">
          <div className="w-[80%] h-[80%] p-6">
            <img src={earnInterest} className="w-[100%] object-cover" />
          </div>
          <p>Earn Interest</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
