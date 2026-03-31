import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface LibraryImage {
  id: string;
  imageUrl: string;
  name: string;
  description?: string;
}

interface LibraryContextType {
  libraryImages: LibraryImage[];
  addLibraryImage: (image: LibraryImage) => void;
  removeLibraryImage: (id: string) => void;
  updateLibraryImage: (id: string, updates: Partial<LibraryImage>) => void;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

const safeGetItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage write failures (e.g. private mode/quota/security restrictions).
  }
};

const parseSavedLibrary = (value: string | null): LibraryImage[] => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [libraryImages, setLibraryImages] = useState<LibraryImage[]>(() => {
    // Initialize from localStorage
    return parseSavedLibrary(safeGetItem('tattooLibraryImages'));
  });

  // Save to localStorage whenever libraryImages changes
  useEffect(() => {
    safeSetItem('tattooLibraryImages', JSON.stringify(libraryImages));
  }, [libraryImages]);

  const addLibraryImage = (image: LibraryImage) => {
    setLibraryImages((prev) => [...prev, image]);
  };

  const removeLibraryImage = (id: string) => {
    setLibraryImages((prev) => prev.filter((img) => img.id !== id));
  };

  const updateLibraryImage = (id: string, updates: Partial<LibraryImage>) => {
    setLibraryImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, ...updates } : img))
    );
  };

  return (
    <LibraryContext.Provider
      value={{
        libraryImages,
        addLibraryImage,
        removeLibraryImage,
        updateLibraryImage,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
}