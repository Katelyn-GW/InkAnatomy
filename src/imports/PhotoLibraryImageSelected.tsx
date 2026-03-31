import svgPaths from "./svg-arwyrzzhtx";
import imgRectangle25 from "figma:asset/bdc6b30d6f0206ffaae1972125a2eeaf45483750.png";
import imgBannerFrame2 from "figma:asset/4413c43c9d3a0efcf7faded2b68712983ceda16c.png";
import { Eraser } from 'lucide-react';

interface PhotoLibraryImageSelectedProps {
  uploadedImages?: Array<{ id: string; imageUrl: string; name: string }>;
  onDelete?: () => void;
}

export default function PhotoLibraryImageSelected({ 
  uploadedImages = [],
  onDelete 
}: PhotoLibraryImageSelectedProps = {}) {
  // Define square positions for easy reference
  const squares = [
    { id: 'rabbit', left: 21, top: 142 },
    { id: '1-2', left: 146, top: 142 },
    { id: '1-3', left: 271, top: 142 },
    { id: '2-1', left: 21, top: 286 },
    { id: '2-2', left: 146, top: 286 },
    { id: '2-3', left: 271, top: 286 },
    { id: '3-1', left: 20, top: 430 },
    { id: '3-2', left: 145, top: 430 },
    { id: '3-3', left: 270, top: 430 },
    { id: '4-1', left: 18, top: 574 },
    { id: '4-2', left: 143, top: 574 },
    { id: '4-3', left: 268, top: 574 },
  ];

  // Helper function to check if a square has an uploaded image
  const hasUploadedImage = (squareIndex: number) => {
    // uploadedImages[0] -> squares[1], uploadedImages[1] -> squares[2], etc.
    const imageIndex = squareIndex - 1;
    return imageIndex >= 0 && uploadedImages[imageIndex] !== undefined;
  };

  return (
    <div className="bg-[#427f6e] relative size-full" data-name="Photo library- Image selected">
      <div className="absolute bg-[#f5e2c6] h-[610px] left-0 top-[115px] w-[402px]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_20.4px_9px_#e1bf8c]" />
      </div>
      {!hasUploadedImage(6) && <div className="absolute bg-[#72aea3] h-[127px] left-[20px] rounded-[5px] top-[430px] w-[111px]" />}
      {!hasUploadedImage(7) && <div className="absolute bg-[#72aea3] h-[127px] left-[145px] rounded-[5px] top-[430px] w-[111px]" />}
      {!hasUploadedImage(8) && <div className="absolute bg-[#72aea3] h-[127px] left-[270px] rounded-[5px] top-[430px] w-[111px]" />}
      {!hasUploadedImage(3) && <div className="absolute bg-[#72aea3] h-[127px] left-[21px] rounded-[5px] top-[286px] w-[111px]" />}
      {!hasUploadedImage(4) && <div className="absolute bg-[#72aea3] h-[127px] left-[146px] rounded-[5px] top-[286px] w-[111px]" />}
      {!hasUploadedImage(5) && <div className="absolute bg-[#72aea3] h-[127px] left-[271px] rounded-[5px] top-[286px] w-[111px]" />}
      {!hasUploadedImage(1) && <div className="absolute bg-[#72aea3] h-[127px] left-[146px] rounded-[5px] top-[142px] w-[111px]" />}
      {!hasUploadedImage(2) && <div className="absolute bg-[#72aea3] h-[127px] left-[271px] rounded-[5px] top-[142px] w-[111px]" />}
      {!hasUploadedImage(9) && <div className="absolute bg-[#72aea3] h-[127px] left-[18px] rounded-[5px] top-[574px] w-[111px]" />}
      {!hasUploadedImage(10) && <div className="absolute bg-[#72aea3] h-[127px] left-[143px] rounded-[5px] top-[574px] w-[111px]" />}
      {!hasUploadedImage(11) && <div className="absolute bg-[#72aea3] h-[127px] left-[268px] rounded-[5px] top-[574px] w-[111px]" />}
      <div className="absolute bg-[#8dd7ca] border border-black border-solid h-[64px] left-[18px] rounded-[5px] shadow-[1px_6px_6.4px_2px_rgba(0,0,0,0.25)] top-[762px] w-[361px]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_1px_19.5px_4px_#028a7b]" />
      </div>
      <div className="absolute left-[112px] overflow-clip size-[16px] top-[146px] z-20 cursor-pointer" data-name="RabbitFullscreenIcon">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[33.18%_36.82%_65.45%_60.2%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.66%_36.82%_48.97%_60.2%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.59%_37.56%_32.04%_59.45%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.59%_68.66%_32.04%_28.36%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.66%_68.66%_48.97%_28.36%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.18%_68.66%_65.45%_28.36%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.7%_36.82%_81.92%_60.2%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.18%_4.98%_65.45%_92.04%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[48.63%] left-[91.29%] right-[5.72%] top-1/2" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.59%_7.21%_32.04%_89.8%]" data-name="Icon">
        <div className="absolute inset-[-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g filter="url(#filter0_f_1_354)" id="Icon">
              <path d={svgPaths.p192cf280} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21" id="filter0_f_1_354" width="21" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_354" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[127px] left-[21px] pointer-events-none rounded-[5px] top-[142px] w-[111px]">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[105.8%] left-[0.07%] max-w-none top-[-5.68%] w-full" src={imgRectangle25} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[5px]" />
      </div>
      <p className="-translate-x-1/2 absolute font-['Pirata One',sans-serif] h-[25px] leading-[normal] left-[200px] not-italic text-[32px] text-black text-center top-[769px] w-[140px]">Upload</p>
      {!hasUploadedImage(1) && (
        <div className="absolute left-[152px] overflow-clip size-[99px] top-[158px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(2) && (
        <div className="absolute left-[277px] overflow-clip size-[99px] top-[158px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(5) && (
        <div className="absolute left-[277px] overflow-clip size-[99px] top-[300px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(4) && (
        <div className="absolute left-[152px] overflow-clip size-[99px] top-[300px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(3) && (
        <div className="absolute left-[27px] overflow-clip size-[99px] top-[299px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(6) && (
        <div className="absolute left-[26px] overflow-clip size-[99px] top-[447px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(7) && (
        <div className="absolute left-[151px] overflow-clip size-[99px] top-[447px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(8) && (
        <div className="absolute left-[274px] overflow-clip size-[99px] top-[444px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(11) && (
        <div className="absolute left-[274px] overflow-clip size-[99px] top-[588px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(10) && (
        <div className="absolute left-[149px] overflow-clip size-[99px] top-[588px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!hasUploadedImage(9) && (
        <div className="absolute left-[26px] overflow-clip size-[99px] top-[588px]" data-name="Image">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-1.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.85 75.85">
                <path d={svgPaths.p1f0c6180} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen icons for all 11 squares (excluding rabbit) */}
      {/* Row 1, Col 2 */}
      <div className="absolute left-[237px] overflow-clip size-[16px] top-[146px] z-20 cursor-pointer" data-name="FullscreenIcon-1-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 1, Col 3 */}
      <div className="absolute left-[362px] overflow-clip size-[16px] top-[146px] z-20 cursor-pointer" data-name="FullscreenIcon-1-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 2, Col 1 */}
      <div className="absolute left-[112px] overflow-clip size-[16px] top-[290px] z-20 cursor-pointer" data-name="FullscreenIcon-2-1">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 2, Col 2 */}
      <div className="absolute left-[237px] overflow-clip size-[16px] top-[290px] z-20 cursor-pointer" data-name="FullscreenIcon-2-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 2, Col 3 */}
      <div className="absolute left-[362px] overflow-clip size-[16px] top-[290px] z-20 cursor-pointer" data-name="FullscreenIcon-2-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 3, Col 1 */}
      <div className="absolute left-[111px] overflow-clip size-[16px] top-[434px] z-20 cursor-pointer" data-name="FullscreenIcon-3-1">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 3, Col 2 */}
      <div className="absolute left-[236px] overflow-clip size-[16px] top-[434px] z-20 cursor-pointer" data-name="FullscreenIcon-3-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 3, Col 3 */}
      <div className="absolute left-[361px] overflow-clip size-[16px] top-[434px] z-20 cursor-pointer" data-name="FullscreenIcon-3-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 4 fullscreen icons - hidden behind popup with lower z-index */}
      {/* Row 4, Col 1 */}
      <div className="absolute left-[109px] overflow-clip size-[16px] top-[578px] z-0 cursor-pointer" data-name="FullscreenIcon-4-1">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 4, Col 2 */}
      <div className="absolute left-[234px] overflow-clip size-[16px] top-[578px] z-0 cursor-pointer" data-name="FullscreenIcon-4-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Row 4, Col 3 */}
      <div className="absolute left-[359px] overflow-clip size-[16px] top-[578px] z-0 cursor-pointer" data-name="FullscreenIcon-4-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Uploaded images - render without blur */}
      {uploadedImages.slice(0, 11).map((image, index) => {
        const squareIndex = index + 1; // Skip rabbit square at index 0
        if (squareIndex >= squares.length) return null;
        const square = squares[squareIndex];
        
        return (
          <div
            key={image.id}
            className="absolute h-[127px] rounded-[5px] w-[111px] z-10"
            style={{ left: `${square.left}px`, top: `${square.top}px` }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[5px]">
              <img
                alt={image.name}
                className="absolute h-full w-full object-cover"
                src={image.imageUrl}
              />
            </div>
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[5px]" />
          </div>
        );
      })}

      <div className="absolute bg-[#ead3b2] border-11 border-[#9bc6b1] border-solid h-[326px] left-[18px] top-[507px] w-[364px]" />
      <div className="absolute h-[140px] left-[136px] top-[530px] w-[136px]" data-name="_ (19) 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[72.79%] left-[10.16%] max-w-none top-[-6.53%] w-[80.03%]" src={imgRectangle25} />
        </div>
      </div>
      {/* Darker tan background box for description text */}
      <div className="absolute bg-[#d4b895] rounded-[5px] h-[50px] left-[38px] top-[695px] w-[328px]" />
      <p className="absolute font-['Poppins',sans-serif] h-[32px] leading-[normal] left-[46px] not-italic text-[15px] text-black top-[702px] w-[310px] whitespace-pre-wrap z-10">{`Symbolizes rebirth and new beginnings. Got it a Lunar Lady tattoo for $300.  `}</p>
      <button type="button" className="absolute left-[57px] top-[751px] h-[36px] w-[135px] rounded-[5px] border border-black bg-[#ecd2ad] shadow-[2px_8px_8.7px_-1px_rgba(0,0,0,0.25)] transition-[transform,background-color,box-shadow] duration-100 hover:bg-[#f1d8b5] active:translate-y-[2px] active:bg-[#e2c49a] active:shadow-[1px_3px_4px_-1px_rgba(0,0,0,0.28)]">
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_10.1px_4px_#cca87c] transition-shadow duration-100 active:shadow-[inset_0px_2px_12px_5px_#b88d5d]" />
        <span className="relative block font-['Poppins',sans-serif] text-[16px] leading-[36px] text-black transition-transform duration-100 active:translate-y-[1px]">Close</span>
      </button>
      <button type="button" className="absolute left-[213px] top-[751px] h-[36px] w-[135px] rounded-[5px] border border-black bg-[#8dd7ca] shadow-[2px_6px_10.4px_2px_rgba(0,0,0,0.25)] transition-[transform,background-color,box-shadow] duration-100 hover:bg-[#96e2d4] active:translate-y-[2px] active:bg-[#72c6b7] active:shadow-[1px_3px_5px_1px_rgba(0,0,0,0.24)]">
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_15.6px_-1px_#028a7b] transition-shadow duration-100 active:shadow-[inset_0px_1px_14px_1px_#016d61]" />
        <span className="relative block font-['Poppins',sans-serif] text-[16px] leading-[36px] text-black transition-transform duration-100 active:translate-y-[1px]">Add to Avatar</span>
      </button>
      <div className="absolute bg-[#8dd7ca] border border-black border-solid h-[36px] left-[135px] rounded-[5px] shadow-[2px_6px_10.4px_2px_rgba(0,0,0,0.25)] top-[620px] w-[135px]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15.6px_-1px_#028a7b]" />
      </div>
      
      {/* Eraser icon for deleting the rabbit (Note: This cannot be deleted, but icon is displayed for consistency) */}
      {onDelete && (
        <div 
          className="absolute left-[40px] overflow-clip size-[23px] top-[527px] cursor-pointer z-20" 
          data-name="Delete"
        >
          <Eraser size={23} color="#000" strokeWidth={2} />
        </div>
      )}
      
      <div className="absolute left-[338px] overflow-clip size-[23px] top-[527px]" data-name="Edit">
        <div className="absolute inset-[7.83%_7.83%_8.33%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-5.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2829 21.2829">
              <path d={svgPaths.pcd9b680} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Poppins',sans-serif] h-[21px] leading-[normal] left-[203px] not-italic text-[16px] text-black text-center top-[627px] w-[210px]">Rabbit</p>
      <div className="absolute h-[97px] left-[30px] top-[35px] w-[338px] z-40" data-name="bannerFRAME 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[552.58%] left-[-32.84%] max-w-none top-[-206.19%] w-[158.58%]" src={imgBannerFrame2} />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-pirata h-[24px] leading-[normal] left-[202px] not-italic text-[24px] text-black text-center top-[67px] w-[204px] z-50">Your Library</p>
      <div className="absolute h-[32px] left-[282px] overflow-clip top-[63px] w-[37px] z-50" data-name="Plus">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-5.36%_-4.63%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5833 20.6667">
              <path d={svgPaths.p2e3b3780} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[34px] left-[94px] overflow-clip top-[63px] w-[32px] z-50" data-name="User">
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
    </div>
  );
}