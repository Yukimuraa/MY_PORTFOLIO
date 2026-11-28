import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';

const SoundContext = createContext();

const SOUND_SRC = '/sounds/ui-press.mp3';
const COOLDOWN_MS = 90;
const SOUND_VOLUME = 0.25;

export const SoundProvider = ({ children }) => {
  // OFF by default unless the user explicitly enabled it previously
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('soundEnabled') === 'true';
    }
    return false;
  });

  const audioRef = useRef(null);
  const lastPlayedRef = useRef(0);

  // Lazily initialize a single lightweight Audio instance
  const getAudio = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioRef.current) {
      const audio = new Audio(SOUND_SRC);
      audio.preload = 'auto';
      audio.volume = SOUND_VOLUME;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  useEffect(() => {
    localStorage.setItem('soundEnabled', soundEnabled ? 'true' : 'false');
    if (soundEnabled) {
      getAudio();
    }
  }, [soundEnabled, getAudio]);

  const playSound = useCallback(
    (force = false) => {
      if (!force && !soundEnabled) return;
      const now = Date.now();
      if (now - lastPlayedRef.current < COOLDOWN_MS) return;

      const audio = getAudio();
      if (!audio) return;

      lastPlayedRef.current = now;
      try {
        audio.pause();
        audio.currentTime = 0;
        const promise = audio.play();
        if (promise && typeof promise.catch === 'function') {
          promise.catch(() => {
            // Respect browser autoplay restrictions silently
          });
        }
      } catch {
        // Ignore playback errors on unsupported environments
      }
    },
    [soundEnabled, getAudio]
  );

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        // Play directly within user gesture when enabling sound
        playSound(true);
      }
      return next;
    });
  }, [playSound]);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    return { soundEnabled: false, toggleSound: () => {}, playSound: () => {} };
  }
  return context;
};
