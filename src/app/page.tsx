
"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Header from "./component/Header";
import Loader from "./component/Loader";
import AudioPlayer from "./component/AudioPlayer";
import cyberpunk_3 from '../../public/cyberpunk/3.png';

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
        // style={{ transform: 'scale(1)' }} // Initial zoom state
        />

      </div>
      <div className="h-[1000px] bg-black flex justify-center items-center">
        <AudioPlayer />
      </div>
    </div>
  );
}
