import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Tattoo {
  id: string;
  imageUrl: string;
  position: {
    x: number;
    y: number;
  };
  scale: number;
  flipped?: boolean;
  rotation?: number; // degrees
  side: 'front' | 'back'; // Track which side the tattoo is on
}

interface TattooContextType {
  tattoos: Tattoo[];
  currentTattoo: Tattoo | null;
  setCurrentTattoo: (tattoo: Tattoo | null) => void;
  saveTattoo: (tattoo: Tattoo) => void;
  removeTattoo: (id: string) => void;
  clearTattoos: () => void;
}

const TattooContext = createContext<TattooContextType | undefined>(undefined);

// Bump this string whenever the saved Tattoo schema changes to auto-clear stale data.
const STORAGE_VERSION = 'v3';

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

const safeRemoveItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore storage remove failures.
  }
};

const parseSavedTattoos = (value: string | null): Tattoo[] => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function TattooProvider({ children }: { children: ReactNode }) {
  const [tattoos, setTattoos] = useState<Tattoo[]>(() => {
    const storedVersion = safeGetItem('avatarTattoosVersion');
    if (storedVersion !== STORAGE_VERSION) {
      safeRemoveItem('avatarTattoos');
      safeSetItem('avatarTattoosVersion', STORAGE_VERSION);
      return [];
    }

    return parseSavedTattoos(safeGetItem('avatarTattoos'));
  });
  const [currentTattoo, setCurrentTattoo] = useState<Tattoo | null>(null);

  // Save to localStorage whenever tattoos changes
  useEffect(() => {
    safeSetItem('avatarTattoos', JSON.stringify(tattoos));
  }, [tattoos]);

  const saveTattoo = (tattoo: Tattoo) => {
    setTattoos((prev) => {
      const existingIndex = prev.findIndex((t) => t.id === tattoo.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = tattoo;
        return updated;
      }
      return [...prev, tattoo];
    });
    setCurrentTattoo(null);
  };

  const removeTattoo = (id: string) => {
    setTattoos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearTattoos = () => {
    setTattoos([]);
    setCurrentTattoo(null);
  };

  return (
    <TattooContext.Provider
      value={{
        tattoos,
        currentTattoo,
        setCurrentTattoo,
        saveTattoo,
        removeTattoo,
        clearTattoos,
      }}
    >
      {children}
    </TattooContext.Provider>
  );
}

export function useTattoo() {
  const context = useContext(TattooContext);
  if (!context) {
    throw new Error('useTattoo must be used within a TattooProvider');
  }
  return context;
}