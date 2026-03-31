import svgPaths from "./svg-b0x4or9xal";
import imgBannerFrame1 from "figma:asset/4413c43c9d3a0efcf7faded2b68712983ceda16c.png";
import imgRectangle25 from "figma:asset/bdc6b30d6f0206ffaae1972125a2eeaf45483750.png";

interface PhotoLibraryProps {
  selectedSquare?: string | null;
  uploadedImages?: Array<{ id: string; imageUrl: string; name: string }>;
}

export default function PhotoLibrary({ selectedSquare, uploadedImages = [] }: PhotoLibraryProps = {}) {
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
    return uploadedImages[squareIndex - 1] !== undefined;
  };

  return (
    <div className="bg-[#427f6e] relative size-full" data-name="Photo library">
      <div className="absolute h-[97px] left-[30px] top-[35px] w-[338px] z-40" data-name="bannerFRAME 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[552.58%] left-[-32.84%] max-w-none top-[-206.19%] w-[158.58%]" src={imgBannerFrame1} />
        </div>
      </div>
      <div className="absolute bg-[#f5e2c6] h-[610px] left-0 top-[115px] w-[402px]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_20.4px_9px_#e1bf8c]" />
      </div>
      {/* Blue squares - conditionally rendered based on uploaded images */}
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
      <button type="button" className="absolute left-[18px] top-[762px] h-[64px] w-[361px] rounded-[5px] border border-black bg-[#8dd7ca] shadow-[1px_6px_6.4px_2px_rgba(0,0,0,0.25)] transition-[transform,background-color,box-shadow] duration-100 hover:bg-[#96e2d4] active:translate-y-[2px] active:bg-[#72c6b7] active:shadow-[1px_3px_4px_1px_rgba(0,0,0,0.24)]">
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_1px_1px_19.5px_4px_#028a7b] transition-shadow duration-100 active:shadow-[inset_1px_2px_16px_3px_#016d61]" />
        <span className="relative block font-['Poppins',sans-serif] text-[36px] leading-[64px] text-black transition-transform duration-100 active:translate-y-[1px]">Add to Avatar</span>
      </button>
      <div className="absolute left-[112px] overflow-clip size-[16px] top-[146px] z-20 cursor-pointer" data-name="RabbitFullscreenIcon">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 1, col 2 */}
      <div className="absolute left-[237px] overflow-clip size-[16px] top-[146px] z-20 cursor-pointer" data-name="FullscreenIcon-1-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 1, col 3 */}
      <div className="absolute left-[362px] overflow-clip size-[16px] top-[146px] z-20 cursor-pointer" data-name="FullscreenIcon-1-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 2, col 1 */}
      <div className="absolute left-[112px] overflow-clip size-[16px] top-[290px] z-20 cursor-pointer" data-name="FullscreenIcon-2-1">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 2, col 2 */}
      <div className="absolute left-[237px] overflow-clip size-[16px] top-[290px] z-20 cursor-pointer" data-name="FullscreenIcon-2-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 2, col 3 */}
      <div className="absolute left-[362px] overflow-clip size-[16px] top-[290px] z-20 cursor-pointer" data-name="FullscreenIcon-2-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 3, col 1 */}
      <div className="absolute left-[111px] overflow-clip size-[16px] top-[434px] z-20 cursor-pointer" data-name="FullscreenIcon-3-1">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 3, col 2 */}
      <div className="absolute left-[236px] overflow-clip size-[16px] top-[434px] z-20 cursor-pointer" data-name="FullscreenIcon-3-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 3, col 3 */}
      <div className="absolute left-[361px] overflow-clip size-[16px] top-[434px] z-20 cursor-pointer" data-name="FullscreenIcon-3-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 4, col 1 */}
      <div className="absolute left-[109px] overflow-clip size-[16px] top-[578px] z-20 cursor-pointer" data-name="FullscreenIcon-4-1">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 4, col 2 */}
      <div className="absolute left-[234px] overflow-clip size-[16px] top-[578px] z-20 cursor-pointer" data-name="FullscreenIcon-4-2">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Fullscreen icon for row 4, col 3 */}
      <div className="absolute left-[359px] overflow-clip size-[16px] top-[578px] z-20 cursor-pointer" data-name="FullscreenIcon-4-3">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[16.7%_36.82%_81.92%_60.2%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.52%_36.82%_65.1%_60.2%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.66%_36.82%_48.97%_60.2%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.59%_37.56%_32.04%_59.45%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.59%_68.66%_32.04%_28.36%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.66%_68.66%_48.97%_28.36%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.52%_68.66%_65.1%_28.36%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.7%_5.72%_81.92%_91.29%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.52%_5.72%_65.1%_91.29%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[48.63%] left-[91.29%] right-[5.72%] top-1/2" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.59%_7.21%_32.04%_89.8%]" data-name="Icon">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[127px] left-[21px] rounded-[5px] top-[142px] w-[111px]" data-name="RabbitImage">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <img alt="" className="absolute h-[105.8%] left-[0.2%] max-w-none top-[-5.68%] w-full" src={imgRectangle25} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[5px]" />
      </div>
      
      {/* Uploaded images */}
      {uploadedImages.slice(0, 11).map((image, index) => {
        // Skip the first square (rabbit position) and use the rest
        const squareIndex = index + 1; // Skip rabbit square at index 0
        if (squareIndex >= squares.length) return null;
        const square = squares[squareIndex];
        
        return (
          <div key={image.id}>
            {/* Uploaded image container */}
            <div
              className="absolute h-[127px] rounded-[5px] w-[111px] z-10"
              style={{ left: `${square.left}px`, top: `${square.top}px` }}
              data-name={`UploadedImage-${square.id}`}
              data-square-id={square.id}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[5px]">
                <img
                  alt={image.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={image.imageUrl}
                />
              </div>
              <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[5px]" />
            </div>
            {/* Fullscreen icon for uploaded image */}
            <div 
              className="absolute overflow-clip size-[16px] z-20 cursor-pointer" 
              style={{ left: `${square.left + 91}px`, top: `${square.top + 4}px` }}
              data-name={`FullscreenIcon-${square.id}`}
            >
              <div className="absolute inset-[12.5%]" data-name="Icon">
                <div className="absolute inset-[-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <path d={svgPaths.p2c0e5c80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
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
      {/* Image icons - conditionally rendered */}
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

      {/* Selection overlays for all squares */}
      {squares.map((square) => (
        <div
          key={square.id}
          data-square-id={square.id}
          className="absolute h-[127px] w-[111px] rounded-[5px] cursor-pointer z-10"
          style={{ left: `${square.left}px`, top: `${square.top}px` }}
        >
          {selectedSquare === square.id && (
            <div className="absolute inset-0 border-[4px] border-[#028a7b] rounded-[5px] pointer-events-none shadow-[0_0_12px_rgba(2,138,123,0.6)]" />
          )}
        </div>
      ))}
    </div>
  );
}