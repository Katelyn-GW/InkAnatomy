import svgPaths from "./svg-h2g0sgwaql";
import imgBannerFrame2 from "figma:asset/4413c43c9d3a0efcf7faded2b68712983ceda16c.png";
import imgBodymap1 from "../assets/bodymapfront.png";
import imgBodymapBack from "figma:asset/c3460138663653472f44dd388c4a54844597dc90.png";
import { useIsMobile } from "../app/components/ui/use-mobile";

interface AvatarEditorProps {
  scale?: number;
  isFlipped?: boolean;
  children?: React.ReactNode;
}

export default function AvatarEditor({ scale = 1, isFlipped = false, children }: AvatarEditorProps) {
  const isMobile = useIsMobile();

  return (
    <div className="bg-[#427f6e] border border-black border-solid relative size-full" data-name="Avatar editor">
      <div className="absolute h-[97px] left-[31px] top-[35px] w-[338px] z-40" data-name="bannerFRAME 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[552.58%] left-[-32.84%] max-w-none top-[-206.19%] w-[158.58%]" src={imgBannerFrame2} />
        </div>
      </div>
      <div className="absolute border border-black border-solid h-[676px] left-[20px] rounded-[25px] top-[102px] w-[368px] overflow-hidden" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 368 676\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(1.1267e-15 33.8 -18.4 2.0697e-15 184 338)\\'><stop stop-color=\\'rgba(141,215,202,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(134,205,192,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
        <div 
          className="absolute" 
          data-name="bodymap 1"
          style={{ 
            left: '18px',
            top: '10px',
            width: '331px',
            height: 'calc(100% - 12px)',
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
              src={isFlipped ? imgBodymapBack : imgBodymap1} 
            />
          </div>
        </div>
        {children}
      </div>
      <p className="-translate-x-1/2 absolute font-pirata h-[24px] leading-[normal] left-[201px] not-italic text-[24px] text-black text-center top-[68px] w-[204px] z-50">Avatar Editor</p>
      <div className="absolute h-[34px] left-[86px] overflow-clip top-[63px] w-[32px] z-50" data-name="User">
        <div className="absolute inset-[12.5%_16.67%]" data-name="Icon">
          <div className="absolute inset-[-3.92%_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 27.5">
              <g id="Icon">
                <path d={svgPaths.p2fa30a97} fill="var(--fill-0, #028A7B)" />
                <path d={svgPaths.p18c8bb00} fill="var(--fill-0, #028A7B)" />
                <path d={svgPaths.pda46e80} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[34px] left-[290px] overflow-clip top-[63px] w-[32px] z-50" data-name="Book">
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
      <button
        type="button"
        className="absolute left-[11px] top-[798px] h-[46px] w-[174px] rounded-[5px] border border-black bg-[#ecd2ad] shadow-[2px_8px_8.7px_-1px_rgba(0,0,0,0.25)] transition-[transform,background-color,box-shadow] duration-100 hover:bg-[#f1d8b5] active:translate-y-[2px] active:bg-[#e2c49a] active:shadow-[1px_3px_4px_-1px_rgba(0,0,0,0.28)]"
      >
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_10.1px_4px_#cca87c] transition-shadow duration-100 active:shadow-[inset_0px_2px_12px_5px_#b88d5d]" />
        <span className="relative block font-poppins text-[20px] leading-[46px] text-black transition-transform duration-100 active:translate-y-[1px]">
          Add Tattoo
        </span>
      </button>
      <button
        type="button"
        className="absolute left-[213px] top-[798px] h-[46px] w-[174px] rounded-[5px] border border-black bg-[#8dd7ca] shadow-[2px_6px_10.4px_2px_rgba(0,0,0,0.25)] transition-[transform,background-color,box-shadow] duration-100 hover:bg-[#96e2d4] active:translate-y-[2px] active:bg-[#72c6b7] active:shadow-[1px_3px_5px_1px_rgba(0,0,0,0.24)]"
      >
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_15.6px_-1px_#028a7b] transition-shadow duration-100 active:shadow-[inset_0px_1px_14px_1px_#016d61]" />
        <span className="relative block font-poppins text-[20px] leading-[46px] text-black transition-transform duration-100 active:translate-y-[1px]">
          Done
        </span>
      </button>
      {!isMobile && (
        <>
          <button
            type="button"
            className="absolute left-[322px] top-[656px] h-[40px] w-[42px] rounded-full border border-black bg-[#F5E2C6] flex items-center justify-center transition-[background-color,transform] duration-100 hover:bg-[#E5D2B6] active:translate-y-[1px] active:bg-[#dcc4a1]"
            data-name="Zoom in"
          >
            <svg className="block h-[23px] w-[23px]" fill="none" preserveAspectRatio="none" viewBox="0 0 23.75 23.75">
              <path d={svgPaths.p820f740} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute left-[322px] top-[708px] h-[40px] w-[42px] rounded-full border border-black bg-[#F5E2C6] flex items-center justify-center transition-[background-color,transform] duration-100 hover:bg-[#E5D2B6] active:translate-y-[1px] active:bg-[#dcc4a1]"
            data-name="Zoom out"
          >
            <svg className="block h-[24px] w-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
              <path d={svgPaths.p2cc47840} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </>
      )}
      <div
        className={`absolute left-[322px] ${isMobile ? 'top-[706px]' : 'top-[604px]'} h-[42px] w-[42px] rounded-full border border-black flex items-center justify-center select-none transition-[background-color,box-shadow,transform] duration-100 active:translate-y-[1px] ${
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
    </div>
  );
}