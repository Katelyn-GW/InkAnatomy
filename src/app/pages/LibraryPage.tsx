import { useState } from 'react';
import { useNavigate } from 'react-router';
import PhotoLibrary from '../../imports/PhotoLibrary';
import { useTattoo } from '../context/TattooContext';
import { useLibrary } from '../context/LibraryContext';
import imgRectangle25 from "figma:asset/bdc6b30d6f0206ffaae1972125a2eeaf45483750.png";

export default function LibraryPage() {
  const navigate = useNavigate();
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const { setCurrentTattoo } = useTattoo();
  const { libraryImages } = useLibrary();

  // Handle navigation when clicking on elements
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check if user icon was clicked
    if (target.closest('[data-name="User"]')) {
      navigate('/preview');
      return;
    }
    
    // Check if plus icon was clicked
    if (target.closest('[data-name="Plus"]')) {
      navigate('/add-tattoo?from=library');
      return;
    }

    // Check if "Add to Avatar" button was clicked
    if (target.textContent === 'Add to Avatar' && selectedSquare) {
      // Handle rabbit
      if (selectedSquare === 'rabbit') {
        setCurrentTattoo({
          id: Date.now().toString(),
          imageUrl: imgRectangle25,
          position: { x: 0, y: 0 },
          scale: 1,
        });
      } else {
        // Handle uploaded images
        const squareIds = ['1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3', '4-1', '4-2', '4-3'];
        const squareIndex = squareIds.indexOf(selectedSquare);
        if (squareIndex >= 0 && squareIndex < libraryImages.length) {
          const selectedImage = libraryImages[squareIndex];
          setCurrentTattoo({
            id: Date.now().toString(),
            imageUrl: selectedImage.imageUrl,
            position: { x: 0, y: 0 },
            scale: 1,
          });
        }
      }
      navigate(`/editor?selectedImage=${selectedSquare}`);
      return;
    }
    
    // Check if fullscreen icon on rabbit image was clicked
    if (target.closest('[data-name="RabbitFullscreenIcon"]')) {
      navigate('/library-selected?image=rabbit');
      return;
    }
    
    // Check if any other fullscreen icon was clicked
    const fullscreenIcon = target.closest('[data-name^=\"FullscreenIcon-\"]');
    if (fullscreenIcon) {
      const iconName = fullscreenIcon.getAttribute('data-name');
      // Extract the square ID from the icon name (e.g., "FullscreenIcon-1-2" -> "1-2")
      const squareId = iconName?.replace('FullscreenIcon-', '');
      navigate(`/library-selected?image=${squareId}`);
      return;
    }

    // Check if a square was clicked (for selection)
    const squareElement = target.closest('[data-square-id]');
    if (squareElement) {
      const squareId = squareElement.getAttribute('data-square-id');
      setSelectedSquare(squareId);
      return;
    }
  };

  return (
    <div onClick={handleClick}>
      <PhotoLibrary selectedSquare={selectedSquare} uploadedImages={libraryImages} />
    </div>
  );
}