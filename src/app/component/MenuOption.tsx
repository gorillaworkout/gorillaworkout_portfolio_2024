// // components/AudioPlayer.tsx
// import { useEffect, useRef, useState } from 'react';
// import { Howl } from 'howler';
// import { gsap } from "gsap";
// import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { GrAchievement } from "react-icons/gr";

// gsap.registerPlugin(MotionPathPlugin);
// const MenuOption: React.FC = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const circleRefs = useRef<Array<React.RefObject<SVGCircleElement>>>([
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null),
//         useRef(null),
//     ]);
//     useEffect(() => {
//         const timeline = gsap.timeline({
//             onComplete: () => setIsVisible(true),
//         });
//         timeline.fromTo(
//             "#dots_id",
//             {
//                 opacity: 0,
//                 display: "none",
//             },
//             {
//                 opacity: 1,
//                 display: "flex",
//                 delay: 0.5,
//                 duration: 2,
//             },
//         );
//         timeline.fromTo(
//             ".achievement_id",
//             {
//                 opacity: 0,
//                 display: "none",
//             },
//             {
//                 opacity: 1,
//                 display: "flex",
//                 delay: 0,
//                 duration: 2,
//             },
//         );
//         if (isVisible) {
//             gsap.to(circleRefs.current.map((ref) => ref.current), {
//                 opacity: 1,
//                 duration: 0.5,
//                 stagger: 0.1,
//                 repeat: -1,
//                 yoyo: true,
//                 ease: "power1.inOut",
//             });
//         }
//     }, [isVisible]);

//     // menuRounded
//     const menuRounded = useRef<HTMLDivElement>(null);
//     const menuRounded2 = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       if (isVisible && menuRounded.current && menuRounded2.current) {
//         const circle = menuRounded.current;
//         const circle2 = menuRounded2.current;
  
//         // GSAP Animation Timeline
//         const tl = gsap.timeline({ repeat: -1 });
//         const tl2 = gsap.timeline({ repeat: -1 });
  
//         tl.to(circle, { scale: 1.1, duration: 0.5, ease: 'power2.inOut' })
//           .to(circle, { scale: 1, duration: 0.5, ease: 'power2.inOut' });

//           tl2.to(circle2, { scale: 1.1, duration: 0.5, ease: 'power2.inOut' })
//           .to(circle2, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
        
//         return () => {
//           tl.kill(); // Clean up animation on unmount
//           tl2.kill(); // Clean up animation on unmount
//         };
//       }
//     }, [isVisible]);

//     return (
//         <div className="menu-option w-full h-[90%]">
//             <div className="absolute top-0 flex flex-row w-full h-full">
//                 <div className={`${isVisible ? "absolute" : "hidden"}  bottom-0 left-[20%] h-[500px] w-[300px]`}>
//                     <div  ref={menuRounded} className={`achievement_id !z-20 p-4  top-[20%] left-[5%]  justify-center items-center rounded-full w-[70px] h-[70px] border rounded-circle ${isVisible ? "absolute" : "hidden"} hover:cursor-pointer`}>
//                         <GrAchievement className={`text-white flex w-[40px] h-[40px]`} />
//                     </div>
//                     {/* <svg
//                         id="dots_id"
//                         className={`absolute bottom-5  ${isVisible ? "flex" : "hidden"} z-1`}
//                         width="100"
//                         height="400"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <g fill="white" stroke="white" strokeWidth="2">
//                             <circle
//                                 ref={circleRefs.current[0]}
//                                 cx="50"
//                                 cy="110" // Adjusted
//                                 r="10"
//                                 opacity="0.6"
//                             />
//                             <circle
//                                 ref={circleRefs.current[1]}
//                                 cx="50"
//                                 cy="150" // Adjusted
//                                 r="10"
//                                 opacity="0.6"
//                             />
//                             <circle
//                                 ref={circleRefs.current[2]}
//                                 cx="50"
//                                 cy="200" // Adjusted
//                                 r="10"
//                                 opacity="0.6"
//                             />
//                             <circle
//                                 ref={circleRefs.current[3]}
//                                 cx="50"
//                                 cy="250" // Adjusted
//                                 r="10"
//                                 opacity="0.4"
//                             />
//                             <circle
//                                 ref={circleRefs.current[4]}
//                                 cx="50"
//                                 cy="300" // Adjusted
//                                 r="10"
//                                 opacity="0.4"
//                             />
//                             <circle
//                                 ref={circleRefs.current[5]}
//                                 cx="50"
//                                 cy="350" // Adjusted
//                                 r="10"
//                                 opacity="0"
//                             />
//                         </g>
//                     </svg> */}
//                 </div>
//                 <div className={`${isVisible ? "absolute" : "hidden"} bottom-0 right-[0%] h-[500px] w-[300px]`}>
//                     <div   ref={menuRounded2} className={`achievement_id !z-20 p-4  top-0 left-[5%]  justify-center items-center rounded-full w-[70px] h-[70px] border rounded-circle ${isVisible ? "absolute" : "hidden"} hover:cursor-pointer`}>
//                         <GrAchievement className={`text-white flex w-[40px] h-[40px]  `} />
//                     </div>
//                     {/* <svg
//                         id="dots_id"
//                         className={`absolute bottom-[30%]  ${isVisible ? "flex" : "hidden"} z-1`}
//                         width="100"
//                         height="370"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <g fill="white" stroke="white" strokeWidth="2">
//                             <circle
//                                 ref={circleRefs.current[6]}
//                                 cx="50"
//                                 cy="110" // Adjusted
//                                 r="10"
//                                 opacity="0.6"
//                             />
//                             <circle
//                                 ref={circleRefs.current[7]}
//                                 cx="50"
//                                 cy="150" // Adjusted
//                                 r="10"
//                                 opacity="0.6"
//                             />
//                             <circle
//                                 ref={circleRefs.current[8]}
//                                 cx="50"
//                                 cy="200" // Adjusted
//                                 r="10"
//                                 opacity="0.5"
//                             />
//                             <circle
//                                 ref={circleRefs.current[9]}
//                                 cx="50"
//                                 cy="250" // Adjusted
//                                 r="10"
//                                 opacity="0.4"
//                             />
//                             <circle
//                                 ref={circleRefs.current[10]}
//                                 cx="50"
//                                 cy="300" // Adjusted
//                                 r="10"
//                                 opacity="0.3"
//                             />
//                             <circle
//                                 ref={circleRefs.current[11]}
//                                 cx="50"
//                                 cy="350" // Adjusted
//                                 r="10"
//                                 opacity="0.2"
//                             />
//                                   <circle
//                                 ref={circleRefs.current[12]}
//                                 cx="50"
//                                 cy="300" // Adjusted
//                                 r="10"
//                                 opacity="0.4"
//                             />
//                             <circle
//                                 ref={circleRefs.current[13]}
//                                 cx="50"
//                                 cy="350" // Adjusted
//                                 r="10"
//                                 opacity="0.6"
//                             />
//                         </g>
//                     </svg> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MenuOption;


import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { GrAchievement } from "react-icons/gr";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const MenuOption: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const menuRounded = useRef<HTMLDivElement>(null);
    const menuRounded2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            onComplete: () => setIsVisible(true),
        });
        timeline.fromTo(
            "#dots_id",
            {
                opacity: 0,
                display: "none",
            },
            {
                opacity: 1,
                display: "flex",
                delay: 0.5,
                duration: 2,
            }
        );
        timeline.fromTo(
            ".achievement_id",
            {
                opacity: 0,
                display: "none",
            },
            {
                opacity: 1,
                display: "flex",
                delay: 0,
                duration: 2,
            }
        );
    }, []);

    useEffect(() => {
        if (isVisible && menuRounded.current && menuRounded2.current) {
            const circle = menuRounded.current;
            const circle2 = menuRounded2.current;

            // GSAP Animation Timeline
            const tl = gsap.timeline({ repeat: -1 });
            const tl2 = gsap.timeline({ repeat: -1 });

            tl.to(circle, { scale: 1.1, duration: 0.5, ease: 'power2.inOut' })
              .to(circle, { scale: 1, duration: 0.5, ease: 'power2.inOut' });

            tl2.to(circle2, { scale: 1.1, duration: 0.5, ease: 'power2.inOut' })
               .to(circle2, { scale: 1, duration: 0.5, ease: 'power2.inOut' });

            return () => {
                tl.kill(); // Clean up animation on unmount
                tl2.kill(); // Clean up animation on unmount
            };
        }
    }, [isVisible]);

    return (
        <div className="menu-option w-full h-[90%]">
            <div className="absolute top-0 flex flex-row w-full h-full">
                <div className={`${isVisible ? "absolute" : "hidden"} bottom-0 left-[20%] h-[500px] w-[300px]`}>
                    <div
                        ref={menuRounded}
                        className={`achievement_id !z-20 p-4 top-[20%] left-[5%] justify-center items-center rounded-full w-[70px] h-[70px] border rounded-circle ${isVisible ? "absolute" : "hidden"} hover:cursor-pointer`}
                    >
                        <GrAchievement className={`text-white flex w-[40px] h-[40px]`} />
                    </div>
                </div>
                <div className={`${isVisible ? "absolute" : "hidden"} bottom-0 right-[0%] h-[500px] w-[300px]`}>
                    <div
                        ref={menuRounded2}
                        className={`achievement_id !z-20 p-4 top-0 left-[5%] justify-center items-center rounded-full w-[70px] h-[70px] border rounded-circle ${isVisible ? "absolute" : "hidden"} hover:cursor-pointer`}
                    >
                        <GrAchievement className={`text-white flex w-[40px] h-[40px]`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuOption;
