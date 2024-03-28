
import Slider from "./components/Slider";
import Historia from "./components/Historia";
import Endereco from "./components/Endereco";

import SejaAssinante from "./components/SejaAssinante";


export default function Home() {
  return (
    <>
      <div className="bg-gray-300">
        <Slider />
        <Historia />
        <SejaAssinante />
    
        <div className="">
          <Endereco />
        </div>
      </div>
    </>
  )
}
