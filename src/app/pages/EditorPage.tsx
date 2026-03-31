import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AvatarEditor from '../../imports/AvatarEditor';
import { useTattoo } from '../context/TattooContext';
import imgBodymap1 from '../../assets/bodymapfront.png';
import imgBodymapBack from "figma:asset/c3460138663653472f44dd388c4a54844597dc90.png";
import { useIsMobile } from '../components/ui/use-mobile';

const DESIGN_WIDTH = 402;
const MOBILE_DRAG_MULTIPLIER = 1.8;
const MOBILE_ROTATE_MULTIPLIER = 1.25;
const ROTATE_DRAG_MULTIPLIER = 0.35;

export default function EditorPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [scale, setScale] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const { currentTattoo, setCurrentTattoo, saveTattoo, tattoos, removeTattoo, clearTattoos } = useTattoo();
  const [selectedTattooId, setSelectedTattooId] = useState<string | null>(null);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const tattooZoomFactor = scale;
  const maskZoomFactor = scale;
  
  // Find the saved tattoo if it exists
  const savedTattoo = currentTattoo ? tattoos.find(t => t.id === currentTattoo.id) : null;
  const activeTattoo = savedTattoo || currentTattoo;
  
  // Tattoo position and scale state for the current/active tattoo
  const [tattooScale, setTattooScale] = useState(activeTattoo?.scale || 0.3);
  const [tattooPosition, setTattooPosition] = useState(activeTattoo?.position || { x: 0, y: 0 });
  const [tattooFlipped, setTattooFlipped] = useState(activeTattoo?.flipped || false);
  const [tattooRotation, setTattooRotation] = useState(activeTattoo?.rotation || 0);
  const [isDragging, setIsDragging] = useState(false);
  const [isRotateMode, setIsRotateMode] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const tattooStartPos = useRef({ x: 0, y: 0 });
  const rotateLastAngle = useRef(0);
  const pinchStartDistance = useRef<number | null>(null);
  const pinchStartScale = useRef(1);
  const touchDragActive = useRef(false);

  const getInteractionScale = () => {
    if (!editorRef.current) return 1;
    const rect = editorRef.current.getBoundingClientRect();
    if (!rect.width) return 1;
    return rect.width / DESIGN_WIDTH;
  };

  const clampTattooPosition = (
    x: number,
    y: number,
    nextTattooScale = tattooScale,
    nextAvatarScale = scale,
  ) => {
    const effectiveZoomFactor = nextAvatarScale;

    // Match desktop behavior across all devices.
    const halfScreenSize = 75 * nextTattooScale * effectiveZoomFactor;
    const maxX = Math.max(0, (184 - halfScreenSize) / effectiveZoomFactor);
    const maxY = Math.max(0, (338 - halfScreenSize) / effectiveZoomFactor);

    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  const persistCurrentTattoo = () => {
    if (!currentTattoo) return;

    saveTattoo({
      id: currentTattoo.id,
      imageUrl: currentTattoo.imageUrl,
      position: clampTattooPosition(tattooPosition.x, tattooPosition.y),
      scale: tattooScale,
      flipped: tattooFlipped,
      rotation: tattooRotation,
      side: isFlipped ? 'back' : 'front',
    });
  };

  // Update state when the selected tattoo changes.
  // Position is stored normalized (scale-independent).
  useEffect(() => {
    if (activeTattoo) {
      setTattooScale(activeTattoo.scale || 0.3);
      setTattooPosition(activeTattoo.position || { x: 0, y: 0 });
      setTattooFlipped(activeTattoo.flipped || false);
      setTattooRotation(activeTattoo.rotation || 0);
    }
  }, [activeTattoo?.id]);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent;
    
    // Check if user icon was clicked
    if (target.closest('[data-name="User"]')) {
      persistCurrentTattoo();
      navigate('/preview');
      return;
    }
    
    // Check if Refresh/Flip button was clicked
    if (target.closest('[data-name="Refresh ccw"]')) {
      setIsFlipped(prev => !prev);
      return;
    }
    
    // Check if Zoom in button was clicked
    if (target.closest('[data-name="Zoom in"]')) {
      setScale((prev) => {
        const nextScale = Math.min(prev + 0.1, 2);
        setTattooPosition((prevPos) =>
          clampTattooPosition(prevPos.x, prevPos.y, tattooScale, nextScale),
        );
        return nextScale;
      });
      return;
    }
    
    // Check if Zoom out button was clicked
    if (target.closest('[data-name="Zoom out"]')) {
      setScale((prev) => {
        const nextScale = Math.max(prev - 0.1, 0.5);
        setTattooPosition((prevPos) =>
          clampTattooPosition(prevPos.x, prevPos.y, tattooScale, nextScale),
        );
        return nextScale;
      });
      return;
    }
    
    // Check if Add Tattoo button was clicked
    if (text === 'Add Tattoo') {
      navigate('/add-tattoo?from=editor');
      return;
    }
    
    // Check if Done button was clicked
    if (text === 'Done') {
      persistCurrentTattoo();
      navigate('/preview');
      return;
    }
    
    // Check if book icon was clicked
    if (target.closest('[data-name="Book"]')) {
      navigate('/library');
      return;
    }
  };

  const handleTattooScaleUp = () => {
    setTattooScale((prev) => {
      const nextScale = Math.min(prev + 0.05, 2);
      setTattooPosition((prevPos) =>
        clampTattooPosition(prevPos.x, prevPos.y, nextScale, scale),
      );
      return nextScale;
    });
  };

  const handleTattooScaleDown = () => {
    setTattooScale((prev) => {
      const nextScale = Math.max(prev - 0.05, 0.1);
      setTattooPosition((prevPos) =>
        clampTattooPosition(prevPos.x, prevPos.y, nextScale, scale),
      );
      return nextScale;
    });
  };

  const handleDeleteTattoo = () => {
    if (currentTattoo) {
      removeTattoo(currentTattoo.id);
      setCurrentTattoo(null);
    } else if (selectedTattooId) {
      removeTattoo(selectedTattooId);
      setSelectedTattooId(null);
    }
  };

  const maskWidth = 187 * maskZoomFactor;
  const maskHeight = 653 * maskZoomFactor;
  const maskX = 183.5 - maskWidth / 2;
  const maskY = 336.5 - maskHeight / 2;

  const bodyMaskStyle: React.CSSProperties = {
    maskImage: `url(${isFlipped ? imgBodymapBack : imgBodymap1})`,
    WebkitMaskImage: `url(${isFlipped ? imgBodymapBack : imgBodymap1})`,
    maskMode: 'alpha',
    WebkitMaskMode: 'alpha',
    maskSize: `${maskWidth}px ${maskHeight}px`,
    WebkitMaskSize: `${maskWidth}px ${maskHeight}px`,
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: `${maskX}px ${maskY}px`,
    WebkitMaskPosition: `${maskX}px ${maskY}px`,
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (pinchStartDistance.current !== null) return;
    if (e.pointerType === 'touch') return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    e.preventDefault();
    e.stopPropagation();

    if (isRotateMode) {
      setIsDragging(false);
      setIsRotating(true);
      rotateLastAngle.current = e.clientX;
    } else {
      setIsRotating(false);
      setIsDragging(true);
    }

    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }

    dragStartPos.current = { x: e.clientX, y: e.clientY };
    tattooStartPos.current = { ...tattooPosition };
  };

  const normalizeRotation = (value: number) => (value % 360 + 360) % 360;

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;
    if (pinchStartDistance.current !== null) return;

    if (isRotating) {
      e.preventDefault();
      e.stopPropagation();

      const deltaX = e.clientX - rotateLastAngle.current;
      rotateLastAngle.current = e.clientX;
      setTattooRotation((prev) => {
        const nextRotation = prev + deltaX * ROTATE_DRAG_MULTIPLIER;
        return normalizeRotation(nextRotation);
      });
      return;
    }

    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    
    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;
    const interactionScale = getInteractionScale();
    const dragMultiplier = isMobile ? MOBILE_DRAG_MULTIPLIER : 1;

    const nextPos = clampTattooPosition(
      tattooStartPos.current.x + (deltaX * dragMultiplier) / (tattooZoomFactor * interactionScale),
      tattooStartPos.current.y + (deltaY * dragMultiplier) / (tattooZoomFactor * interactionScale),
    );
    setTattooPosition(nextPos);
  };

  const handlePointerEnd = () => {
    touchDragActive.current = false;
    rotateLastAngle.current = 0;
    setIsDragging(false);
    setIsRotating(false);
  };

  const handleTattooTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile || pinchStartDistance.current !== null || e.touches.length !== 1) return;

    e.preventDefault();
    e.stopPropagation();

    touchDragActive.current = true;

    if (isRotateMode) {
      setIsDragging(false);
      setIsRotating(true);
      rotateLastAngle.current = e.touches[0].clientX;
      return;
    }

    setIsRotating(false);
    setIsDragging(true);

    dragStartPos.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    tattooStartPos.current = { ...tattooPosition };
  };

  const handleTattooTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile || !touchDragActive.current || e.touches.length !== 1) return;

    e.preventDefault();
    e.stopPropagation();

    if (isRotating) {
      const deltaX = e.touches[0].clientX - rotateLastAngle.current;
      rotateLastAngle.current = e.touches[0].clientX;

      setTattooRotation((prev) => {
        const nextRotation = prev + deltaX * MOBILE_ROTATE_MULTIPLIER;
        return normalizeRotation(nextRotation);
      });
      return;
    }

    const deltaX = e.touches[0].clientX - dragStartPos.current.x;
    const deltaY = e.touches[0].clientY - dragStartPos.current.y;
    const interactionScale = getInteractionScale();

    const nextPos = clampTattooPosition(
      tattooStartPos.current.x + (deltaX * MOBILE_DRAG_MULTIPLIER) / (tattooZoomFactor * interactionScale),
      tattooStartPos.current.y + (deltaY * MOBILE_DRAG_MULTIPLIER) / (tattooZoomFactor * interactionScale),
    );
    setTattooPosition(nextPos);
  };

  const handleTattooTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    if (e.touches.length === 0) {
      touchDragActive.current = false;
      setIsDragging(false);
      setIsRotating(false);
      rotateLastAngle.current = 0;
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

    pinchStartDistance.current = distance;
    pinchStartScale.current = scale;
    setIsDragging(false);
    setIsRotating(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile || e.touches.length !== 2 || pinchStartDistance.current === null) return;

    e.preventDefault();
    const currentDistance = getTouchDistance(e.touches);
    if (!currentDistance) return;

    const ratio = currentDistance / pinchStartDistance.current;
    const nextScale = Math.max(0.5, Math.min(2, pinchStartScale.current * ratio));

    setScale(nextScale);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    if (isRotating && e.touches.length === 0) {
      rotateLastAngle.current = 0;
      setIsRotating(false);
    }
    if (e.touches.length < 2) {
      pinchStartDistance.current = null;
      setTattooPosition((prevPos) =>
        clampTattooPosition(prevPos.x, prevPos.y, tattooScale, scale),
      );
    }
  };

  const handleSavedTattooClick = (tattoo: any) => {
    if (isDeleteMode) return; // Don't edit in delete mode
    
    // Set this tattoo as the current one to edit
    setCurrentTattoo(tattoo);
    
    // Load its properties into the editing state
    setTattooScale(tattoo.scale || 0.3);
    const pos = tattoo.position || { x: 0, y: 0 };
    setTattooPosition(clampTattooPosition(pos.x, pos.y, tattoo.scale || 0.3, scale));
    setTattooFlipped(tattoo.flipped || false);
    setTattooRotation(tattoo.rotation || 0);
  };

  return (
    <div 
      ref={editorRef}
      onClick={handleClick} 
      className="relative"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerLeave={handlePointerEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'none' }}
    >
      <AvatarEditor scale={scale} isFlipped={isFlipped}>
        {/* Display saved tattoos for the current side - rendered inside AvatarEditor so they're clipped */}
        {tattoos.filter(t => t.side === (isFlipped ? 'back' : 'front')).length > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 rounded-[25px] overflow-hidden pointer-events-none"
              style={bodyMaskStyle}
            >
              {tattoos
                .filter(t => t.side === (isFlipped ? 'back' : 'front'))
                .filter(t => !currentTattoo || t.id !== currentTattoo.id) // Hide the one being edited
                .map((tattoo) => (
                  <div
                    key={tattoo.id}
                    className={`absolute ${isDeleteMode ? 'pointer-events-auto cursor-pointer hover:opacity-80' : 'pointer-events-auto cursor-pointer hover:opacity-80'}`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${tattoo.position.x * tattooZoomFactor}px), calc(-50% + ${tattoo.position.y * tattooZoomFactor}px)) scale(${tattoo.scale * tattooZoomFactor})`,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isDeleteMode) {
                        removeTattoo(tattoo.id);
                      } else {
                        handleSavedTattooClick(tattoo);
                      }
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
        )}

        {/* Draggable/current tattoo */}
        {currentTattoo && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 rounded-[25px] overflow-hidden pointer-events-none"
              style={bodyMaskStyle}
            >
              <div
                className="absolute select-none"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${tattooPosition.x * tattooZoomFactor}px), calc(-50% + ${tattooPosition.y * tattooZoomFactor}px)) scale(${tattooScale * tattooZoomFactor})`,
                }}
              >
                <img
                  src={currentTattoo.imageUrl}
                  alt="Tattoo"
                  className="pointer-events-none select-none"
                  draggable={false}
                  style={{ 
                    width: '150px',
                    height: '150px',
                    objectFit: 'contain',
                    transform: `rotate(${tattooRotation}deg)${tattooFlipped ? ' scaleX(-1)' : ''}`,
                  }}
                />
              </div>
            </div>

            <div
              className="absolute cursor-move select-none pointer-events-auto z-10"
              onPointerDown={handlePointerDown}
              onTouchStart={handleTattooTouchStart}
              onTouchMove={handleTattooTouchMove}
              onTouchEnd={handleTattooTouchEnd}
              onTouchCancel={handleTattooTouchEnd}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${tattooPosition.x * tattooZoomFactor}px), calc(-50% + ${tattooPosition.y * tattooZoomFactor}px)) scale(${tattooScale * tattooZoomFactor})`,
                touchAction: 'none',
              }}
            >
              <div className="relative border-2 border-dashed border-black bg-transparent">
                <img
                  src={currentTattoo.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none select-none opacity-0"
                  draggable={false}
                  style={{ 
                    width: '150px',
                    height: '150px',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>

            {/* Scale controls - positioned relative to current tattoo */}
            <div 
              className="absolute flex flex-col gap-3 pointer-events-none z-10"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${tattooPosition.x * tattooZoomFactor}px + ${75 * tattooScale * tattooZoomFactor}px + 15px), calc(-50% + ${tattooPosition.y * tattooZoomFactor}px))`,
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleTattooScaleUp();
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 pointer-events-auto cursor-pointer text-xl shadow-lg"
              >
                <span className="text-[26px] leading-none font-normal">+</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleTattooScaleDown();
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 pointer-events-auto cursor-pointer text-xl shadow-lg"
              >
                <span className="text-[26px] leading-none font-normal">-</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTattooFlipped(prev => !prev);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 pointer-events-auto cursor-pointer text-base shadow-lg"
              >
                <span className="text-[26px] leading-none font-normal">⇄</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRotateMode((prev) => {
                    const next = !prev;
                    if (!next) {
                      setIsRotating(false);
                      rotateLastAngle.current = 0;
                    }
                    return next;
                  });
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto cursor-pointer text-xl shadow-lg transition-colors ${
                  isRotateMode ? 'bg-[#028A7B] text-white hover:bg-[#027066]' : 'bg-black text-white hover:bg-gray-800'
                }`}
                title={isRotateMode ? 'Rotate mode on (tap to exit)' : 'Rotate mode off (tap to enable)'}
              >
                <span className="text-[26px] leading-none font-normal">↻</span>
              </button>
            </div>
          </div>
        )}

      </AvatarEditor>
      
      {/* Clear All + Delete Mode Toggle Button */}
      <div className={`absolute ${isMobile ? 'top-[610px]' : 'top-[500px]'} left-[322px] z-50 flex flex-col items-center gap-2`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearTattoos();
          }}
          className="appearance-none shadow-none rounded-full w-[42px] h-[42px] flex items-center justify-center border border-black bg-[#F5E2C6] hover:bg-[#E5D2B6] transition-colors"
          title="Clear all tattoos"
        >
          <span className="text-black text-[11px] font-semibold leading-none">Clear</span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDeleteMode(prev => !prev);
          }}
          className={`appearance-none shadow-none rounded-full w-[42px] h-[42px] flex items-center justify-center border border-black transition-colors ${
            isDeleteMode 
              ? 'bg-[#028A7B] hover:bg-[#027066]' 
              : 'bg-[#F5E2C6] hover:bg-[#E5D2B6]'
          }`}
        >
          <span className={`text-[26px] leading-none font-semibold ${isDeleteMode ? 'text-white' : 'text-black'}`}>✕</span>
        </button>
      </div>
    </div>
  );
}