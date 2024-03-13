import Image from "next/image";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Historia from "./components/Historia";
import Endereco from "./components/Endereco";
import Footer from "./components/Footer";
import SejaAssinante from "./components/SejaAssinante";

export default function Home() {
  return (
    <>
    <div className="bg-gray-200">
      <Menu/>
      <Logo/>
      <NavBar/>
      <Slider/>
      <Historia/>
      <SejaAssinante/>
      <Endereco/>
      <Footer/>
    </div>      
    </>
  )
}
