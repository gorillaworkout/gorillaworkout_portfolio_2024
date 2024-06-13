// components/AudioPlayer.tsx
import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { gsap } from "gsap";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";



const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const soundRef = useRef<Howl | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/music/homeMusic.mp3'],
      volume: 0.5,
      autoplay: true,
      onend: () => setIsPlaying(true),
    });

    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      ".audio-player",
      {
        opacity: 0,
        display: "none"
      },
      {
        opacity: 1,
        duration: 2,
        delay: 2,
        display: "flex"
      },
    );
    return () => {
      soundRef.current?.unload();
    };

  }, []);

  const togglePlayPause = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };



  return (
    <div className="audio-player">
      <button onClick={togglePlayPause} className={`${isVisible ? 'flex' : 'hidden'} flex flex-row items-center gap-x-2`}>
        {
          isPlaying ?
            <>
              <HiOutlineSpeakerWave className="text-white text-[30px]" />
              <p>SOUNDS ON</p>
            </>
            :
            <>
              <HiOutlineSpeakerXMark className="text-white text-[30px]" />
              <p>SOUNDS OFF</p>
            </>
        }
      </button>
    </div>
  );
};

export default AudioPlayer;
