import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TheBigIdea from "./components/TheBigIdea";
import WhyJumpIn from "./components/WhyJumpIn";
import PickYourPlayGround from "./components/PickYourPlayGround";
import FromHelloToHelloWorld from "./components/FromHelloToHelloWorld";
import SaveSomeSpaceForMaking from "./components/SaveSomeSPaceForMaking";
import ALittileHelpGoesALongWay from "./components/ALittleHelpGoesALongWay";
import MoreThanFinishLine from "./components/MoreThanAFinishLine";
import BeforeYouTakeTheLeap from "./components/BeforeYouTakeTheLeap";
import YourIdeaIsInvites from "./components/YourIdeaIsInvites";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TheBigIdea />
      <WhyJumpIn />
      <PickYourPlayGround />
      <FromHelloToHelloWorld />
      <SaveSomeSpaceForMaking />
      <ALittileHelpGoesALongWay />
      <MoreThanFinishLine />
      <BeforeYouTakeTheLeap />
      <YourIdeaIsInvites />
      <Footer />
    </>
  );
}
