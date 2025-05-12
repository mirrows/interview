"use client"
import { useRef, useState } from "react";

type Props = {
  poster?: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function PlayVideo({ poster = '', children }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mask, setMask] = useState<boolean>(true);
  const play = () => {
    setMask(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.controls = true;
      videoRef.current.muted = false;
      videoRef.current.play();
    }

  }
  return (
    <div className="relative mx-auto aspect-video w-full max-w-3xl" onClick={play}>
      {mask && <button className="bg-opacity-40 absolute top-0 right-0 left-0 z-10 flex aspect-video cursor-pointer items-center justify-center rounded-2xl bg-[#00000080] transition-opacity duration-500 opacity-100" aria-label="Play video">
        <img src="/imgs/play.svg" alt="play" className="bg-[#033049] h-16 w-16 rounded-full" />
        <div className="text-midnight absolute top-0 right-0 z-10 m-2 h-8 w-8 rounded-full bg-white p-1 transition-opacity duration-500 opacity-100">
          <img src="/imgs/voice.svg" alt="voice" className="h-full w-full" />
        </div>
      </button>}
      <video ref={videoRef} className="lazy z-20 w-full rounded-2xl entered loaded" autoPlay muted loop playsInline width="768" height="432" poster={poster}>
        {children}
      </video>
    </div>
  )

}