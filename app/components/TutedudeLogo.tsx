import Image from "next/image";
import logo from "../../public/tutedude-logo.avif";

export default function TutedudeLogo() {
  return <Image src={logo} alt="Tutedude" className="tutedude-logo" />;
}
