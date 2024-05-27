import Image from "next/image";
// import LandingImage from "../../../public/assets/learning-journey.png";
import Logo from "../../../public/assets/PerformaLearnLogoSVG.svg";

export default function Landing({
  openModal,
  setShowAccountCreation,
}: {
  openModal: Function;
  setShowAccountCreation: Function;
}) {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl w-3/4 h-3/4 rounded justify-center md:justify-between items-center ">
      <div className="flex flex-row w-full justify-center items-center ">
        <span className="animate-bounce hover:animate-none motion-reduce:animate-none md:w-full md:h-full mb-32 md:mb-0 md:pt-0 w-48 h-48 pt-6">
          <Image
            priority
            id="landing-image"
            width={256}
            height={256}
            src={Logo}
            alt="Learn by Performace"
          />
        </span>
      </div>
      <div className="flex w-full flex-col justify-center items-center ">
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="text-4xl font-bold mb-8">PerformaLearn</h1>
          <p className="text-base w-3/5 font-bold mb-12">
            Discover new courses with personalized AI recommendations
          </p>
        </div>
        <div className="flex w-full flex-col justify-center space-y-3 items-center">
          <button
            onClick={() => openModal(true) & setShowAccountCreation(true)}
            className="w-full max-w-xs bg-slate-100 text-slate-600 hover:text-slate-900 hover:drop-shadow font-semibold rounded-md p-2"
          >
            Get Started
          </button>
          <button
            onClick={() => openModal(true) & setShowAccountCreation(false)}
            className="w-full max-w-xs bg-slate-100 text-slate-600 hover:text-slate-900 hover:drop-shadow font-semibold rounded-md p-2"
          >
            Access Account
          </button>
        </div>
      </div>
    </div>
  );
}
