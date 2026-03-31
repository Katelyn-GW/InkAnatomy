import * as React from 'react';
import { useIsMobile } from './ui/use-mobile';

const SCREEN_WIDTH = 402;
const SCREEN_HEIGHT = 874;
const MOBILE_FRAME_BG = 'radial-gradient(circle at center, rgba(141,215,202,1) 0%, rgba(114,174,163,1) 100%)';

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  const isMobile = useIsMobile();
  const [mobileScale, setMobileScale] = React.useState(1);

  React.useEffect(() => {
    if (!isMobile) {
      setMobileScale(1);
      return;
    }

    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const nextScale = Math.min(
        viewportWidth / SCREEN_WIDTH,
        viewportHeight / SCREEN_HEIGHT,
        1,
      );

      setMobileScale(nextScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('orientationchange', updateScale);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div
        className="flex min-h-[100dvh] w-screen items-center justify-center overflow-hidden"
        style={{ background: MOBILE_FRAME_BG }}
      >
        <div
          className="relative"
          style={{
            width: `${SCREEN_WIDTH * mobileScale}px`,
            height: `${SCREEN_HEIGHT * mobileScale}px`,
          }}
        >
          <div
            className="absolute left-0 top-0 origin-top-left overflow-hidden"
            style={{
              width: `${SCREEN_WIDTH}px`,
              height: `${SCREEN_HEIGHT}px`,
              transform: `scale(${mobileScale})`,
              background: MOBILE_FRAME_BG,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* iPhone Frame */}
      <div className="relative">
        {/* Phone Border and Shadow */}
        <div className="relative bg-black rounded-[50px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="relative bg-[#427f6e] rounded-[42px] overflow-hidden" style={{ width: `${SCREEN_WIDTH}px`, height: `${SCREEN_HEIGHT}px` }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-3xl z-50" style={{ width: '150px', height: '30px' }}>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-gray-900 rounded-full" style={{ width: '60px', height: '6px' }} />
            </div>
            
            {/* Content */}
            <div className="w-full h-full overflow-hidden">
              {children}
            </div>
          </div>
          
          {/* Side Buttons */}
          <div className="absolute -left-1 top-24 bg-black rounded-l-md" style={{ width: '4px', height: '30px' }} />
          <div className="absolute -left-1 top-40 bg-black rounded-l-md" style={{ width: '4px', height: '60px' }} />
          <div className="absolute -left-1 top-52 bg-black rounded-l-md" style={{ width: '4px', height: '60px' }} />
          <div className="absolute -right-1 top-44 bg-black rounded-r-md" style={{ width: '4px', height: '80px' }} />
        </div>
      </div>
    </div>
  );
}