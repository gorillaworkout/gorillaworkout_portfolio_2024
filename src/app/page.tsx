
"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Header from "./component/Header";
import Loader from "./component/Loader";
import AudioPlayer from "./component/AudioPlayer";
import cyberpunk_3 from '../../public/cyberpunk/3.png';
import { CiPaperplane } from "react-icons/ci";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const circleRefs = useRef<Array<React.RefObject<SVGCircleElement>>>([
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]);
  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      "#rect",
      {
        opacity: 0,
        display: "none",
      },
      {
        opacity: 1,
        display: "flex",
        delay: 2,
        duration: 5,
        repeat: 0,
        yoyo: false,
        ease: "power1.inOut",
        motionPath: {
          path: "#path_route",
          align: "#path_route",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      }
    );

    if (isVisible) {
      gsap.to(circleRefs.current.map((ref) => ref.current), {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [isVisible]);

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
        <svg
          className={`absolute bottom-0 left-[20%] ${isVisible ? "flex" : "hidden"
            }`}
          width="100"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="white" stroke="white" strokeWidth="2">
            <circle
              ref={circleRefs.current[0]}
              cx="50"
              cy="30"
              r="10"
              opacity="0.6"
            />
            <circle
              ref={circleRefs.current[1]}
              cx="50"
              cy="70"
              r="10"
              opacity="0.6"
            />
            <circle
              ref={circleRefs.current[2]}
              cx="50"
              cy="110"
              r="10"
              opacity="0.6"
            />
            <circle
              ref={circleRefs.current[3]}
              cx="50"
              cy="150"
              r="10"
              opacity="0.6"
            />
            <circle
              ref={circleRefs.current[4]}
              cx="50"
              cy="190"
              r="10"
              opacity="0.4"
            />
            <circle
              ref={circleRefs.current[5]}
              cx="50"
              cy="230"
              r="10"
              opacity="0.4"
            />
            <circle
              ref={circleRefs.current[6]}
              cx="50"
              cy="270"
              r="10"
              opacity="0"
            />
          </g>
        </svg>
      </div>
      <AudioPlayer />
    </div>
  );
}
