"use client"
import { Image } from "antd";
import Icon from "@ant-design/icons";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

type Props = {
  data: {
    id: string,
    title?: string,
    color?: string,
    audio: string,
    pic: string,
  };
  name?: string;
  hover?: boolean;
  isEnter?: boolean;
  onMouseEnter?: Function
  className?: string;
  cardClassName?: string;
  rounded?: string;
}

const play = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12 0C5.37333 0 0 5.37333 0 12C0 18.6267 5.37333 24 12 24C18.6267 24 24 18.6267 24 12C24 5.37333 18.6267 0 12 0ZM17.5633 12.5767L13.6667 14.8267L9.77 17.0767C9.32667 17.3333 8.77 17.0133 8.77 16.5V12V7.5C8.77 6.98667 9.32667 6.66667 9.77 6.92333L13.6667 9.17333L17.5633 11.4233C18.0067 11.68 18.0067 12.32 17.5633 12.5767Z" fill="currentColor"></path></svg>

const pause = <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0C10.7467 0 0 10.7467 0 24C0 37.2533 10.7467 48 24 48C37.2533 48 48 37.2533 48 24C48 10.7467 37.2533 0 24 0ZM22 33C22 33.7333 21.4 34.3333 20.6667 34.3333H16.6667C15.9333 34.3333 15.3333 33.7333 15.3333 33V15C15.3333 14.2667 15.9333 13.6667 16.6667 13.6667H20.6667C21.4 13.6667 22 14.2667 22 15V33ZM32.6667 33C32.6667 33.7333 32.0667 34.3333 31.3333 34.3333H27.3333C26.6 34.3333 26 33.7333 26 33V15C26 14.2667 26.6 13.6667 27.3333 13.6667H31.3333C32.0667 13.6667 32.6667 14.2667 32.6667 15V33Z" fill="currentColor"></path></svg>

export default function AudioCard({ data, hover = false, isEnter = false, onMouseEnter, name = 'Listen', className, cardClassName, rounded = '2xl' }: Props) {
  const [time, setTime] = useState<string>('00:00');
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const setDuration = () => {
    const audio = audioRef.current;
    if (audio) {
      const duration = audio.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = String(Math.floor(duration % 60)).padStart(2, '0');
      setTime(`${minutes}:${seconds}`);
    }
  }
  const [btn, setBtn] = useState(play)
  const onClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setBtn(pause)
      } else {
        audioRef.current.pause();
        setBtn(play)
      }
    }
  }
  const onEnded = () => {
    setProgress(0);
    setBtn(play)
  }
  const changeProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const progress = e.nativeEvent.offsetX / (e.target as HTMLElement).offsetWidth;
    setProgress(progress)
    if (audioRef.current) {
      audioRef.current.currentTime = progress * audioRef.current.duration;
    }
  }
  const enterCard = () => {
    onMouseEnter?.();
  }
  useEffect(() => {
    if (hover && !isEnter) {
      setProgress(0);
      setBtn(play)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0;
      }
    }
  }, [hover, isEnter])
  useEffect(() => {
    if (data.audio) {
      setDuration()
    }
  }, [data.audio])
  return (
    <div
      className={`group flex cursor-pointer flex-col justify-center rounded-${rounded} h-[24.5rem] outline-hidden transition-[width] duration-500 ${hover && !isEnter ? 'w-40' : 'w-64'} visible ${className}`}
      onMouseEnter={enterCard}
    >
      <div className="rounded-t-md rounded-b-md rounded-md rounded-t-2xl rounded-b-2xl rounded-2xl"></div>
      <button className={`w-full rounded-t-${rounded} px-2 py-6 text-left ${hover && !isEnter ? `rounded-b-${rounded}` : 'rounded-b-none'}`} aria-label="View The 5 AM Club" style={{ backgroundColor: data.color || '#fed1b9' }}>
        <img className={cardClassName} alt={data.title || ''} src={data.pic} width="232" height="232" />
      </button>
      <div className={`bg-midnight md:p-4 rounded-t-none rounded-b-${rounded} p-2 ${hover && !isEnter ? 'hidden' : ''}`}>
        <div className="flex flex-row items-center gap-4 text-white w-full">
          <audio
            ref={audioRef} src={data.audio}
            onCanPlay={setDuration}
            onTimeUpdate={(e: any) => setProgress(e.target.currentTime / e.target.duration)}
            onEnded={onEnded}
          />
          <button className="hover:text-green-500 text-white">
            <Icon component={() => btn} className="bg-[#033049] h-12 w-12 rounded-full" onClick={onClick} />
          </button>
          <div className="flex min-w-0 grow flex-col">
            <span className="truncate text-sm font-medium text-white">{name}</span>
            <div className="flex flex-row items-center gap-4">
              <button className="cursor-pointer border-0 bg-transparent p-0 py-2 w-full" type="button">
                <div className="relative h-1 w-full rounded-full bg-gray-100" onClick={changeProgress}>
                  <div className="pointer-events-none absolute h-1 rounded-l-full  bg-green-500" style={{ width: `${Math.floor(progress * 100)}%` }}></div>
                </div>
              </button>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}