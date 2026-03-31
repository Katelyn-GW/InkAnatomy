import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LandingPage from '../../imports/LandingPage';
import { useTattoo } from '../context/TattooContext';
import imgBodymap2 from "../../assets/bodymapfront.png";
import imgBodymapBack from "figma:asset/c3460138663653472f44dd388c4a54844597dc90.png";
import { useIsMobile } from '../components/ui/use-mobile';

// Function to create the body silhouette clipping path
const createBodyClipPath = (ctx: CanvasRenderingContext2D) => {
  const path = new Path2D();
  
  // Head
  path.ellipse(184, 80, 55, 70, 0, 0, Math.PI * 2);
  
  // Torso
  path.moveTo(120, 120);
  path.lineTo(95, 250);
  path.lineTo(85, 380);
  path.lineTo(100, 450);
  path.lineTo(268, 450);
  path.lineTo(283, 380);
  path.lineTo(273, 250);
  path.lineTo(248, 120);
  path.closePath();
  
  // Left arm
  path.ellipse(60, 220, 35, 90, 0, 0, Math.PI * 2);
  
  // Right arm
  path.ellipse(308, 220, 35, 90, 0, 0, Math.PI * 2);
  
  // Hips/upper legs
  path.moveTo(100, 450);
  path.lineTo(85, 550);
  path.lineTo(90, 620);
  path.lineTo(140, 680);
  path.lineTo(228, 680);
  path.lineTo(278, 620);
  path.lineTo(283, 550);
  path.lineTo(268, 450);
  path.closePath();
  
  // Left leg
  path.fillRect(110, 680, 45, 63);
  
  // Right leg
  path.fillRect(213, 680, 45, 63);
  
  ctx.clip(path);
};

export default function PreviewPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [scale, setScale] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [exportImageUrl, setExportImageUrl] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const { tattoos } = useTattoo();
  const [pinchStartDistance, setPinchStartDistance] = useState<number | null>(null);
  const [pinchStartScale, setPinchStartScale] = useState(1);
  const tattooZoomFactor = scale;
  const maskZoomFactor = scale;

  const maskWidth = 187 * maskZoomFactor;
  const maskHeight = 653 * maskZoomFactor;
  const maskX = 183.5 - maskWidth / 2;
  const maskY = 336.5 - maskHeight / 2;

  const bodyMaskStyle: React.CSSProperties = {
    maskImage: `url(${isFlipped ? imgBodymapBack : imgBodymap2})`,
    WebkitMaskImage: `url(${isFlipped ? imgBodymapBack : imgBodymap2})`,
    maskMode: 'alpha',
    WebkitMaskMode: 'alpha',
    maskSize: `${maskWidth}px ${maskHeight}px`,
    WebkitMaskSize: `${maskWidth}px ${maskHeight}px`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: `${maskX}px ${maskY}px`,
    WebkitMaskPosition: `${maskX}px ${maskY}px`,
  };

  useEffect(() => {
    return () => {
      if (exportImageUrl) {
        // Data URLs don't need revoking, but cleanup for consistency
      }
    };
  }, [exportImageUrl]);

  const loadImageForCanvas = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      
      // Only set crossOrigin for actual HTTP URLs, NOT data URLs
      if (/^https?:/i.test(src)) {
        img.crossOrigin = 'anonymous';
      }

      // Set a timeout to fail fast on mobile
      const timeout = setTimeout(() => {
        reject(new Error('Image load timeout'));
      }, 5000);

      img.onload = () => {
        clearTimeout(timeout);
        resolve(img);
      };
      
      img.onerror = () => {
        clearTimeout(timeout);
        reject(new Error(`Failed to load image`));
      };
      
      img.src = src;
    });

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      // Pre-load all images first
      const avatarImg = await loadImageForCanvas(isFlipped ? imgBodymapBack : imgBodymap2);
      
      const currentSideTattoos = tattoos.filter(
        tattoo => tattoo.side === (isFlipped ? 'back' : 'front')
      );

      // Try to load all tattoo images
      const tattooImages: { tattoo: typeof tattoos[0], img: HTMLImageElement }[] = [];
      for (const tattoo of currentSideTattoos) {
        try {
          const img = await loadImageForCanvas(tattoo.imageUrl);
          tattooImages.push({ tattoo, img });
        } catch (err) {
          // Skip this tattoo if it fails to load
          console.warn('Skipping tattoo due to load error:', err);
        }
      }

      // Now create canvas with pre-loaded images
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 368;
      canvas.height = 743;

      // Draw gradient background
      const gradient = ctx.createRadialGradient(184, 371.5, 0, 184, 371.5, 371.5);
      gradient.addColorStop(0, 'rgba(141,215,202,1)');
      gradient.addColorStop(1, 'rgba(134,205,192,1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw avatar
      const avatarHeight = 734 * scale;
      const aspectRatio = avatarImg.width / avatarImg.height;
      const drawHeight = avatarHeight;
      const drawWidth = drawHeight * aspectRatio;
      const drawX = 84 + (207 - drawWidth) / 2;
      const drawY = 5 + (734 - drawHeight) / 2;
      ctx.drawImage(avatarImg, drawX, drawY, drawWidth, drawHeight);

      // Draw all successfully loaded tattoos
      for (const { tattoo, img } of tattooImages) {
        const centerX = 184;
        const centerY = 338;
        const tattooSize = 150 * tattoo.scale * scale;
        const tattooX = centerX + tattoo.position.x * scale - tattooSize / 2;
        const tattooY = centerY + tattoo.position.y * scale - tattooSize / 2;

        ctx.save();
        
        // Apply body silhouette clipping
        createBodyClipPath(ctx);
        
        // Handle flip
        if (tattoo.flipped) {
          ctx.translate(tattooX + tattooSize / 2, tattooY + tattooSize / 2);
          ctx.scale(-1, 1);
          ctx.translate(-(tattooX + tattooSize / 2), -(tattooY + tattooSize / 2));
        }

        ctx.drawImage(img, tattooX, tattooY, tattooSize, tattooSize);
        ctx.restore();
      }

      // Convert canvas to data URL directly
      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      if (!dataUrl || dataUrl === 'data:,') {
        throw new Error('Canvas export failed');
      }
      
      setExportImageUrl(dataUrl);
      setIsExporting(false);
    } catch (error) {
      console.error('Error creating preview:', error);
      setIsExporting(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check if top left logo/icon was clicked
    if (target.closest('[data-name="TTGiconFILLED2 2"]')) {
      navigate('/editor');
      return;
    }
    
    // Check if Refresh/Flip button was clicked
    if (target.closest('[data-name="Refresh ccw"]')) {
      setIsFlipped(prev => !prev);
      return;
    }
    
    // Check if Zoom in button was clicked
    if (target.closest('[data-name="Zoom in"]')) {
      setScale(prev => Math.min(prev + 0.1, 2)); // Max scale 2x
      return;
    }
    
    // Check if Zoom out button was clicked
    if (target.closest('[data-name="Zoom out"]')) {
      setScale(prev => Math.max(prev - 0.1, 0.5)); // Min scale 0.5x
      return;
    }
    
    // Check if book icon (top right) was clicked
    if (target.closest('[data-name="Book"]')) {
      navigate('/library');
      return;
    }
  };

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile || e.touches.length !== 2) return;
    e.preventDefault();

    const distance = getTouchDistance(e.touches);
    if (!distance) return;

    setPinchStartDistance(distance);
    setPinchStartScale(scale);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile || e.touches.length !== 2 || pinchStartDistance === null) return;
    e.preventDefault();

    const currentDistance = getTouchDistance(e.touches);
    if (!currentDistance) return;

    const ratio = currentDistance / pinchStartDistance;
    const nextScale = Math.max(0.5, Math.min(2, pinchStartScale * ratio));
    setScale(nextScale);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    if (e.touches.length < 2) {
      setPinchStartDistance(null);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'none' }}
    >
      <LandingPage scale={scale} isFlipped={isFlipped} onShare={handleDownload} />
      
      {/* Tattoo overlay aligned to editor geometry */}
      <div 
        className="absolute h-[676px] left-[20px] rounded-[25px] top-[102px] w-[368px] overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 rounded-[25px] overflow-hidden pointer-events-none" style={bodyMaskStyle}>
          {tattoos
            .filter((tattoo) => tattoo.side === (isFlipped ? 'back' : 'front'))
            .map((tattoo) => (
              <div
                key={tattoo.id}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${tattoo.position.x * tattooZoomFactor}px), calc(-50% + ${tattoo.position.y * tattooZoomFactor}px)) scale(${tattoo.scale * tattooZoomFactor})`,
                }}
              >
                <img
                  src={tattoo.imageUrl}
                  alt="Tattoo"
                  className="pointer-events-none"
                  style={{ 
                    width: '150px',
                    height: '150px',
                    objectFit: 'contain',
                    transform: `rotate(${tattoo.rotation || 0}deg)${tattoo.flipped ? ' scaleX(-1)' : ''}`,
                  }}
                />
              </div>
            ))}
        </div>
      </div>

      {exportImageUrl && (
        <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center" onClick={() => setExportImageUrl(null)}>
          <img src={exportImageUrl} alt="Avatar preview" className="max-w-full max-h-full w-full h-full object-contain" />
          <div className="absolute bottom-[20px] left-[20px] right-[20px] flex gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExportImageUrl(null);
              }}
              className="flex-1 h-[48px] rounded-[8px] border border-black bg-white font-poppins text-[16px] text-black"
            >
              Back
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                const link = document.createElement('a');
                link.href = exportImageUrl;
                link.download = `avatar-${Date.now()}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="flex-1 h-[48px] rounded-[8px] border border-black bg-[#8dd7ca] font-poppins text-[16px] text-black font-bold"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}