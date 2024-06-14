
"use client"
import Image from "next/image";
import Header from "./component/Header";
import Loader from "./component/Loader";
import AudioPlayer from "./component/AudioPlayer";
import cyberpunk_3 from '../../public/cyberpunk/3.png';

import MenuOption from "./component/MenuOption";

export default function Home() {

  return (
    <div className="w-full h-full flex flex-col bg-black">
      <Loader />
      <Header />
      <div className="h-screen w-screen">
        <Image
          id="img-bg"
          src={cyberpunk_3}
          alt="Logo"
          className="w-full h-full bg-cover"
        />
        <MenuOption/>
      </div>
      <AudioPlayer />
    </div>
  );
}
