"use client"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "@/utils/common";

type Props = {
  data: any[];
}
export default function MyCarousel({ data }: Props) {
  const [curActive, setActive] = useState(-1)
  const [stop, setStop] = useState(false)
  const refList = useRef<(HTMLDivElement | null)[]>(data.map((_, i) => null))
  const timer = useRef<NodeJS.Timeout | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)
  const scrollOutSideRef = useRef(false)
  const lastScrollLeft = useRef(0); // 记录上一次横向滚动位置
  const updateActive = () => {
    setActive((val) => {
      const res = (val + 1) % data.length
      scrollOutSideRef.current = true
      refList.current[res]?.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" })
      return res || (stop ? 0 : -1)
    })
  }
  const countStop = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setStop(false)
      updateActive()
    }, 5000)
  }
  const clickPrev = () => {
    setStop(true)
    countStop()
    setActive((val) => {
      const res = (val - 1) > -1 ? val - 1 : data.length - 1
      scrollOutSideRef.current = true
      refList.current[res]?.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" })
      return res
    })
  }
  const clickNext = () => {
    setStop(true)
    countStop()
    updateActive()
  }
  const isObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) {
        setStop(true)
        if (timer.current) {
          clearTimeout(timer.current);
        }
        // console.log('在视野以外')
        return
      }
      setStop(false)
      updateActive()
      // console.log('在视野以内')
    });
    return observer
  }
  const onScroll = useCallback(useDebounce((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const curScrollLeft = target.scrollLeft;
    setStop(true)
    // 纵向滑动不处理
    if (curScrollLeft === lastScrollLeft.current) return;
    if (scrollOutSideRef.current) {
      // 外部滑动逻辑不再重复处理
      scrollOutSideRef.current = false;
      lastScrollLeft.current = curScrollLeft;
      return;
    }
    if (curScrollLeft > lastScrollLeft.current) {
      // 向右滑动
      setActive((val) => val + 1)
    } else {
      // 向左滑动
      setActive((val) => val <= 0 ? 0 : Math.min(val, data.length - 1) - 1)
    }
    lastScrollLeft.current = curScrollLeft;
  }, 100), [])
  useEffect(() => {
    if (stop) return;
    if (curActive < 0) {
      setTimeout(() => {
        setActive(0)
      }, 500)
    }
  }, [curActive, stop])
  useEffect(() => {
    const observer = isObserver()
    if (lineRef.current) {
      observer.observe(lineRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <div className="overflow-hidden">
        <div className="md:scroll-px-12 md:gap-10 md:px-12 -mb-8 flex snap-x snap-mandatory scroll-px-4 flex-row gap-4 overflow-x-auto scroll-smooth px-4 pb-8" onScroll={onScroll}>
          {data.map((item, i) => (
            <div ref={(dom => { refList.current[i] = dom })} key={i} className="shrink-0 w-[80vw] flex snap-x snap-mandatory">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div ref={lineRef} className="md:px-16 relative mt-6 flex items-center">
        <div className="mx-auto flex flex-row justify-center gap-2">
          {data.map((_, i) => (
            <div key={i} className="bg-gray-300 relative h-1 w-24 rounded-full">
              <div className={`bg-gray-500 absolute h-1 w-0 rounded-sm ${curActive >= i ? stop ? 'w-24' : 'transition-all duration-5000 ease-linear w-24' : ''}`} onTransitionEnd={updateActive}></div>
            </div>
          ))}
        </div>
        <div className="lg:flex absolute right-[15%] hidden">
          <button aria-label="Previous slide" className="text-gray-300 hover:text-gray-500" onClick={clickPrev}>
            <LeftOutlined style={{ fontSize: '1.5rem' }} />
          </button>
          <button aria-label="Next slide" className="text-gray-300 hover:text-gray-500" onClick={clickNext}>
            <RightOutlined style={{ fontSize: '1.5rem' }} />
          </button>
        </div>
      </div>
    </>
  )

}