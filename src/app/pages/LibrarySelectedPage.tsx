import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import PhotoLibraryImageSelected from '../../imports/PhotoLibraryImageSelected';
import BlankLibraryPopup from '../components/BlankLibraryPopup';
import { useLibrary } from '../context/LibraryContext';
import { useTattoo } from '../context/TattooContext';
import imgRectangle25 from "figma:asset/bdc6b30d6f0206ffaae1972125a2eeaf45483750.png";

export default function LibrarySelectedPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const imageId = searchParams.get('image');
  const { libraryImages, updateLibraryImage, removeLibraryImage } = useLibrary();
  const { setCurrentTattoo } = useTattoo();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  
  // Find the uploaded image based on the square ID
  const squareIds = ['1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3', '4-1', '4-2', '4-3'];
  const squareIndex = imageId ? squareIds.indexOf(imageId) : -1;
  const uploadedImage = squareIndex >= 0 && squareIndex < libraryImages.length ? libraryImages[squareIndex] : null;

  const handleDelete = () => {
    if (uploadedImage) {
      removeLibraryImage(uploadedImage.id);
      navigate('/library');
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent;
    
    // Check if Edit icon was clicked
    if (target.closest('[data-name="Edit"]')) {
      if (uploadedImage) {
        if (isEditing) {
          // Save the edits and exit edit mode
          updateLibraryImage(uploadedImage.id, {
            name: editName,
            description: editDescription,
          });
          setIsEditing(false);
        } else {
          // Enter edit mode
          setIsEditing(true);
          setEditName(uploadedImage.name || '');
          setEditDescription(uploadedImage.description || '');
        }
      }
      e.stopPropagation();
      return;
    }
    
    // Check if Close button was clicked
    if (text === 'Close') {
      // Save edits if editing
      if (isEditing && uploadedImage) {
        updateLibraryImage(uploadedImage.id, {
          name: editName,
          description: editDescription,
        });
        setIsEditing(false);
      }
      navigate('/library');
      return;
    }
    
    // Check if Add to Avatar button was clicked
    if (text === 'Add to Avatar') {
      if (imageId === 'rabbit') {
        setCurrentTattoo({
          id: Date.now().toString(),
          imageUrl: imgRectangle25,
          position: { x: 0, y: 0 },
          scale: 1,
        });
      } else if (uploadedImage) {
        setCurrentTattoo({
          id: Date.now().toString(),
          imageUrl: uploadedImage.imageUrl,
          position: { x: 0, y: 0 },
          scale: 1,
        });
      }
      navigate('/editor');
      return;
    }
    
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
  };

  // Show rabbit version, uploaded image version, or blank version
  let content;
  if (imageId === 'rabbit') {
    content = <PhotoLibraryImageSelected uploadedImages={libraryImages} onDelete={handleDelete} />;
  } else if (uploadedImage) {
    content = (
      <BlankLibraryPopup 
        imageUrl={uploadedImage.imageUrl}
        name={isEditing ? editName : uploadedImage.name}
        description={isEditing ? editDescription : uploadedImage.description || ''}
        isEditing={isEditing}
        onNameChange={setEditName}
        onDescriptionChange={setEditDescription}
        uploadedImages={libraryImages}
        onDelete={handleDelete}
      />
    );
  } else {
    content = <BlankLibraryPopup uploadedImages={libraryImages} />;
  }

  return <div onClick={handleClick}>{content}</div>;
}