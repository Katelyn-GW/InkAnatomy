import svgPaths from "./svg-wmp6qwyica";
import imgBannerFrame1 from "figma:asset/4413c43c9d3a0efcf7faded2b68712983ceda16c.png";
import imgBodymap2 from "../assets/bodymapfront.png";
import imgBodymapBack from "figma:asset/c3460138663653472f44dd388c4a54844597dc90.png";
import imgTtGiconFilled22 from "figma:asset/833201a44e1f6574b4b85553e0257b63b646f1a3.png";
import { useIsMobile } from "../app/components/ui/use-mobile";

interface LandingPageProps {
  scale?: number;
  isFlipped?: boolean;
  onShare?: () => void;
}

export default function LandingPage({ scale = 1, isFlipped = false, onShare }: LandingPageProps) {
  const isMobile = useIsMobile();

  return (
    <div className="bg-[#427f6e] border border-black border-solid relative size-full" data-name="Landing page">
      <div className="absolute h-[97px] left-[23px] top-[35px] w-[338px] z-40" data-name="bannerFRAME 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[552.58%] left-[-32.84%] max-w-none top-[-206.19%] w-[158.58%]" src={imgBannerFrame1} />
        </div>
      </div>
      <div className="absolute border border-black border-solid h-[743px] left-[20px] rounded-[25px] top-[102px] w-[368px] overflow-hidden" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 368 743\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.1267e-15 37.15 -18.4 2.2748e-15 184 371.5)\\'><stop stop-color=\\'rgba(141,215,202,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(134,205,192,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
        <div 
          className="absolute" 
          data-name="bodymap 2"
          style={{ 
            left: '18px',
            top: '10px',
            width: '331px',
            height: '664px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img 
              alt="" 
              className="absolute max-w-none" 
              style={{
                height: '100%',
                left: '50%',
                top: '0',
                transform: 'translateX(-50%)',
                width: 'auto',
                objectFit: 'contain'
              }}
              src={isFlipped ? imgBodymapBack : imgBodymap2} 
            />
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-pirata h-[24px] leading-[normal] left-[192px] not-italic text-[24px] text-black text-center top-[67px] w-[204px] z-50">Preview</p>
      <div
        className={`absolute left-[312px] ${isMobile ? 'top-[739px]' : 'top-[659px]'} size-[48px] rounded-full border border-black flex items-center justify-center select-none transition-[background-color,box-shadow,transform] duration-100 active:translate-y-[1px] ${
          isFlipped
            ? 'bg-[#028A7B] shadow-[0_0_10px_rgba(2,138,123,0.75)] hover:bg-[#027066]'
            : 'bg-[#F5E2C6] hover:bg-[#E5D2B6] active:bg-[#dcc4a1]'
        }`}
        data-name="Refresh ccw"
      >
        <span className={`text-[11px] leading-none font-bold ${isFlipped ? 'text-white' : 'text-black'}`}>
          {isFlipped ? 'back' : 'front'}
        </span>
      </div>
      {!isMobile && (
        <>
          <button
            type="button"
            className="absolute left-[312px] top-[721px] h-[49px] w-[48px] rounded-full border border-black bg-[#F5E2C6] flex items-center justify-center transition-[background-color,transform] duration-100 hover:bg-[#E5D2B6] active:translate-y-[1px] active:bg-[#dcc4a1]"
            data-name="Zoom in"
          >
            <svg className="block h-[27px] w-[26px]" fill="none" preserveAspectRatio="none" viewBox="0 0 26 27.5">
              <path d={svgPaths.p1f477a80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute left-[312px] top-[785px] h-[49px] w-[48px] rounded-full border border-black bg-[#F5E2C6] flex items-center justify-center transition-[background-color,transform] duration-100 hover:bg-[#E5D2B6] active:translate-y-[1px] active:bg-[#dcc4a1]"
            data-name="Zoom out"
          >
            <svg className="block h-[29px] w-[27px]" fill="none" preserveAspectRatio="none" viewBox="0 0 26.75 29">
              <path d={svgPaths.p165c5b00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </>
      )}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onShare?.();
        }}
        className="absolute left-[42px] top-[786px] h-[48px] w-[48px] rounded-full border border-black bg-[#F5E2C6] flex items-center justify-center transition-[background-color,transform] duration-100 hover:bg-[#E5D2B6] active:translate-y-[1px] active:bg-[#dcc4a1]"
        data-name="Share"
      >
        <svg className="block h-[28px] w-[29px]" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 28.6667">
          <path d={svgPaths.p396fb900} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
      <div className="absolute h-[34px] left-[258px] overflow-clip top-[60px] w-[32px] z-50" data-name="Book">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Icon">
          <div className="absolute inset-[-3.53%_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 30.3333">
              <g id="Icon">
                <path d={svgPaths.p18684f80} fill="var(--fill-0, #028A7B)" />
                <path d={svgPaths.pda0100} fill="var(--fill-0, #028A7B)" />
                <path d={svgPaths.p32698100} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[57.062px] items-center justify-center left-[87px] top-[49px] w-[66.565px] z-50" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-15.97deg]">
          <div className="h-[43.063px] relative w-[56.912px]" data-name="TTGiconFILLED2 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[467.28%] left-[-130.57%] max-w-none top-[-153.6%] w-[353.57%]" src={imgTtGiconFilled22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}