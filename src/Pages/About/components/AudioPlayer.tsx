import { useRef, useState, useEffect } from 'react';
import WaveAnimation from './WaveAnimation';
import audio from '@/assets/spanish introduction.mp3'

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleEnded = () => setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <audio ref={audioRef} src={audio} />
      <button
        onClick={togglePlayPause}
        className="bg-green-500 text-white rounded-md px-4 py-2 mt-4 transition duration-300 hover:bg-green-600"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="w-full h-fit rounded-lg overflow-hidden mt-4">
        {isPlaying ? <WaveAnimation /> : ''}
      </div>
    </div>
  )
};

export default AudioPlayer;
