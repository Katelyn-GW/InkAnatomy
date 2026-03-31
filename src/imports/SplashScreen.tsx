import imgTtGiconFilled21 from "figma:asset/833201a44e1f6574b4b85553e0257b63b646f1a3.png";
import imgTitleSplashpage1 from "figma:asset/ab28b8ccb6468d0bd515cae753d8587fc87d83a0.png";

export default function SplashScreen() {
  return (
    <div
      className="relative size-full overflow-hidden"
      data-name="Splash screen"
      style={{
        background:
          'radial-gradient(circle at center, rgba(141,215,202,1) 0%, rgba(114,174,163,1) 100%)',
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[402px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute flex h-[543.382px] items-center justify-center left-[-78px] top-[6px] w-[557.113px]">
            <div className="flex-none rotate-[-33.37deg]">
              <div className="h-[373.163px] relative w-[421.32px]" data-name="TTGiconFILLED2 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[378.21%] left-[-118.74%] max-w-none top-[-118.65%] w-[334.98%] select-none" src={imgTtGiconFilled21} draggable={false} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[152px] left-[-10px] top-[252px] w-[417px]" data-name="TitleSPLASHPAGE 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[410.2%] left-[-25.12%] max-w-none top-[-142.86%] w-[150%] select-none" src={imgTitleSplashpage1} draggable={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}