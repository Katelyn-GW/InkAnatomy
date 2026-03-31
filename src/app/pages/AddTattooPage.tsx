import { useNavigate, useSearchParams } from 'react-router';
import { useRef } from 'react';
import AddTattoo from '../../imports/AddTattoo';
import { useLibrary } from '../context/LibraryContext';

export default function AddTattooPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') || 'editor';
  const { addLibraryImage } = useLibrary();
  
  const downloadsInputRef = useRef<HTMLInputElement>(null);
  const cameraRollInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    Array.from(files).forEach((file) => {
      // Check if file is a PNG/JPG
      if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target?.result as string;
          addLibraryImage({
            id: Date.now().toString() + Math.random(),
            imageUrl,
            name: file.name,
          });
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Navigate back to library after upload
    navigate('/library');
  };

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check if user icon was clicked
    if (target.closest('[data-name="User"]')) {
      navigate('/preview');
      return;
    }
    
    // Check if Downloads button/text was clicked
    if (target.closest('[data-name="DownloadsButton"]') || target.closest('[data-name="Archive"]')) {
      downloadsInputRef.current?.click();
      return;
    }
    
    // Check if Camera Roll button/text was clicked
    if (target.closest('[data-name="CameraRollButton"]') || target.closest('[data-name="Image"]')) {
      cameraRollInputRef.current?.click();
      return;
    }
    
    // Check if Back button was clicked - check both the button div and the text
    const backButton = target.closest('[data-name="BackButton"]');
    const backText = target.textContent?.includes('Back') && target.tagName === 'P';
    
    if (backButton || backText) {
      navigate(`/${from}`);
      return;
    }
    
    // Check if Add to Avatar button was clicked
    const addButton = target.closest('[data-name="AddToAvatarButton"]');
    const addText = target.textContent?.includes('Add to Avatar') && target.tagName === 'P';
    
    if (addButton || addText) {
      navigate('/editor');
      return;
    }
    
    // Check if Your Library was clicked (the text/button in the middle section)
    if (target.closest('[data-name="YourLibraryButton"]')) {
      navigate('/library');
      return;
    }
  };

  return (
    <div onClick={handleClick}>
      <AddTattoo />
      {/* Hidden file inputs */}
      <input
        ref={downloadsInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        multiple
        className="hidden"
        onChange={(e) => handleFileUpload(e.target.files)}
      />
      <input
        ref={cameraRollInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFileUpload(e.target.files)}
      />
    </div>
  );
}