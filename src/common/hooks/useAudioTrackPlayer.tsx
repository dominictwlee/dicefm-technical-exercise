import { useRef, useState, useEffect } from "react";

export default function useAudioTrackPlayer() {
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (audioPlayerRef.current === null) {
      audioPlayerRef.current = new Audio();
    }
  }, []);

  useEffect(() => {
    function handlePlay() {
      setIsAudioPlaying(true);
    }
    function handlePause() {
      setIsAudioPlaying(false);
    }
    audioPlayerRef.current?.addEventListener("play", handlePlay);
    audioPlayerRef.current?.addEventListener("pause", handlePause);

    () => {
      audioPlayerRef.current?.removeEventListener("play", handlePlay);
      audioPlayerRef.current?.removeEventListener("pause", handlePause);
    };
  }, []);

  const play = () => {
    audioPlayerRef.current?.play();
  };

  const pause = () => {
    audioPlayerRef.current?.pause();
  };

  const load = () => {
    audioPlayerRef.current?.load();
  };

  const setSrc = (src: string) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.src = src;
    }
  };

  const getSrc = () => {
    return audioPlayerRef.current?.src ?? null;
  };

  const isReady = () => {
    return !!audioPlayerRef.current;
  };

  return {
    play,
    pause,
    load,
    isAudioPlaying,
    setSrc,
    getSrc,
    isReady,
    setIsAudioPlaying,
  };
}
