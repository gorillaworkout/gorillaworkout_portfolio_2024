import { GoNorthStar } from 'react-icons/go';
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { Howl } from 'howler';

interface HeaderProps {}

const HeaderComponent: React.FC<HeaderProps> = ({}) => {
  const [hoveredItem, setHoveredItem] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => setIsVisible(true),
    });

    timeline.fromTo(
      ".header-container",
      {
        opacity: 0,
        display: "none"
      },
      { 
        opacity: 1, 
        duration: 4,
        delay: 4,
        display: "flex"
      },
    );
  }, []);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/music/onClickMusic.mp3'],
      volume: 0.5,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const handleMouseEnter = (itemName: string) => {
    setHoveredItem(itemName);
    if (!soundRef.current?.playing()) {
      soundRef.current?.play();
    }
    gsap.to(`#${itemName}`, { fontSize: '1.5em', lineHeight: '1.5em', duration: 0.3 });
  };

  const handleMouseLeave = (itemName: string) => {
    setHoveredItem('');
    soundRef.current?.pause();
    gsap.to(`#${itemName}`, { fontSize: '1em', lineHeight: '1em', duration: 0.3 });
  };

  return (
    <div className={`w-full h-24 flex justify-center items-end fixed z-50`}>
      <div className={`w-auto flex-row gap-x-2 header-container ${isVisible ? 'flex' : 'hidden'}`}>
        <div className="flex justify-center items-center rounded-full h-12 w-12 bg-[#ffffff1a]">
          <GoNorthStar className="w-8 h-8 text-white" />
        </div>
        <div className="h-[45px] bg-[#ffffff1a] flex flex-row gap-x-16 justify-between items-center px-8 py-6 rounded-lg">
          <p
            id="Home"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-white' : hoveredItem === 'Home' ? 'text-white' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('Home')}
            onMouseLeave={() => handleMouseLeave('Home')}
          >
            Home
          </p>
          <p
            id="About"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-white' : hoveredItem === 'About' ? 'text-white ' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('About')}
            onMouseLeave={() => handleMouseLeave('About')}
          >
            About
          </p>
          <p
            id="Contact"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-white' : hoveredItem === 'Contact' ? 'text-white' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('Contact')}
            onMouseLeave={() => handleMouseLeave('Contact')}
          >
            Contact
          </p>
          <p
            id="Portfolio"
            className={`tracking-[.2em] menu-item cursor-pointer transition-colors duration-500 ${
              hoveredItem === '' ? 'text-white' : hoveredItem === 'Portfolio' ? 'text-white' : 'text-[#7f7f7f]'
            }`}
            onMouseEnter={() => handleMouseEnter('Portfolio')}
            onMouseLeave={() => handleMouseLeave('Portfolio')}
          >
            Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
