import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Автостарт музики при завантаженні сторінки (з user gesture в браузері)
    const audio = audioRef.current;
    if (audio) {
      // Деякі браузери вимагають user interaction перед автоплеєм
      const playAudio = () => {
        audio.play().catch(() => {
          // Якщо автоплей блокується, користувач вмикає натиском кнопки
          console.log('Autoplay заблокований. Натисніть кнопку для включення музики.');
        });
        setIsPlaying(true);
      };

      // Спробуємо запустити при першому клікові на сторінці
      const enableAudioOnFirstInteraction = () => {
        playAudio();
        document.removeEventListener('click', enableAudioOnFirstInteraction);
        document.removeEventListener('touchstart', enableAudioOnFirstInteraction);
      };

      document.addEventListener('click', enableAudioOnFirstInteraction);
      document.addEventListener('touchstart', enableAudioOnFirstInteraction);

      return () => {
        document.removeEventListener('click', enableAudioOnFirstInteraction);
        document.removeEventListener('touchstart', enableAudioOnFirstInteraction);
      };
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/images/OFIS.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-[#00CED1]/50 hover:scale-110 group"
        title={isPlaying ? 'Вимкнути музику' : 'Включити музику'}
      >
        {isPlaying ? (
          // Значок колонки включена
          <svg
            className="w-6 h-6 text-[#00CED1] group-hover:text-[#FF90E8] transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.1v2.7c2.89.86 5 3.54 5 6.8s-2.11 5.94-5 6.8v2.7c4.01-.91 7-4.49 7-9.5s-2.99-8.59-7-9.5z" />
          </svg>
        ) : (
          // Значок колонки вимкнена
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-[#FF90E8] transition-colors"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L21.714504,3.42527379 C21.5575352,2.6397869 20.6156226,1.7972025 19.8261795,2.09874502 C19.0366365,2.40028753 18.4687547,3.18573467 18.4687547,3.97118181 L18.4687547,3.97118181 C18.4687547,3.97118181 13.399899,0.88 9.85563555,0.88 L8.88922382,0.88 C7.0055484,0.88 5.44408437,2.44146403 5.44408437,4.32532847 L5.44408437,19.5744438 C5.44408437,21.4582582 7.0055484,23.0197222 8.88922382,23.0197222 L9.85563555,23.0197222 C13.399899,23.0197222 18.4687547,19.9285327 18.4687547,19.9285327 L18.4687547,21.1841922 C18.4687547,21.9696791 18.468755,22.9122634 19.0366365,23.24 C19.6045181,23.5715464 20.6156226,23.4644487 21.714504,22.99 L22.9702544,14.0454487 C23.1272231,12.6315722 22.6563168,11.6889879 21.714504,14.0454487 Z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
