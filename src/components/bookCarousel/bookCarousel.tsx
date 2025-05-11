"use client"
import { BookData } from "@/types/common";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from "react";

type Props = {
  data: BookData[];
}

export default function BookCarousel({ data }: Props) {
  const refList = useRef<(HTMLDivElement | null)[]>(data.map((_, i) => null))
  const [slides, setSlides] = useState(5)
  const lineRef = useRef<HTMLDivElement | null>(null)
  const [curActive, setActive] = useState(0)
  const scrollLeft = () => {
    // setActive((val) => {
    //   const res = Math.max(val - slides, 0)
    //   refList.current[res]?.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" })
    //   return res
    // })
    const target = getLastVisibleElement(refList.current)
    const targetIndex = refList.current.indexOf(target)
    console.log(targetIndex)
    if (targetIndex === -1) return
    const res = Math.max(targetIndex - slides, 0)
    refList.current[res]?.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" })

  };
  const scrollRight = () => {
    // setActive((val) => {
    //   const res = Math.min(val + slides, refList.current.length - 1)
    //   refList.current[res]?.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" })
    //   return res
    // })
    const target = getFirstVisibleElement(refList.current)
    const targetIndex = refList.current.indexOf(target)
    console.log(targetIndex, refList.current)
    if (targetIndex === -1) return
    const res = Math.min(targetIndex + slides, refList.current.length - 1)
    refList.current[res]?.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" })
  };
  const updateSwiperWidth = () => {
    const width = window.innerWidth;
    if (width < 1050) {
      setSlides(3)
      return;
    }
    if (width < 1300) {
      setSlides(4)
      return;
    }
    setSlides(5)
  }
  // 定义获取可视区内左边第一个元素的函数
  const getFirstVisibleElement = (refList: (HTMLDivElement | null)[]): HTMLDivElement | null => {
    const container = lineRef.current;
    if (!container) return null;

    const containerLeft = container.offsetLeft;
    const containerRight = containerLeft + container.clientWidth;

    let firstVisibleElement: HTMLDivElement | null = null;
    let minLeft = Infinity;

    refList.forEach((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementLeft = rect.left + window.pageXOffset;
        const elementRight = elementLeft + element.offsetWidth;

        // 检查元素是否在可视区域内
        if (elementLeft - containerLeft > -30 && containerRight - elementRight > 30) {
          if (elementLeft < minLeft) {
            minLeft = elementLeft;
            firstVisibleElement = element;
          }
        }
      }
    });

    return firstVisibleElement;
  };
  // 定义获取可视区内右边第一个元素的函数
  const getLastVisibleElement = (refList: (HTMLDivElement | null)[]): HTMLDivElement | null => {
    const container = lineRef.current;
    if (!container) return null;

    const containerLeft = container.offsetLeft;
    const containerRight = containerLeft + container.clientWidth;

    let lastVisibleElement: HTMLDivElement | null = null;
    let maxRight = -Infinity;

    refList.forEach((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementLeft = rect.left + window.pageXOffset - container.offsetLeft;
        const elementRight = elementLeft + element.offsetWidth;

        // 检查元素是否在可视区域内
        if (elementLeft - containerLeft > -30 && containerRight - elementRight > 30) {
          if (elementRight > maxRight) {
            maxRight = elementRight;
            lastVisibleElement = element;
          }
        }
      }
    });

    return lastVisibleElement;
  };
  useEffect(() => {
    updateSwiperWidth();
    addEventListener('resize', updateSwiperWidth);
    return () => {
      removeEventListener('resize', updateSwiperWidth);
    }
  }, [])
  return (
    <div className="w-full overflow-hidden flex">
      <button data-test-id="slideLeft" aria-label="slide left" type="button" className="hidden disabled:text-light-grey md:block text-white" onClick={scrollLeft}>
        <LeftOutlined className="w-6" style={{ color: '#fff', fontSize: '1.5rem' }} />
      </button>
      <div ref={lineRef} className="pb-8 -mb-8 relative overflow-x-auto flex flex-row gap-8 snap-x snap-mandatory scroll-px-4 md:scroll-px-0 mx-4 md:mx-0 md:mx-2">
        {data.map((book, i) => (
          <div ref={(dom => { refList.current[i] = dom })} key={book.bookId} className="flex-shrink-0 snap-start ">
            <a href={book.href} className="flex rounded font-cera-pro flex-shrink-0 w-44 snap-start p-0 flex-col w-44 p-2 box-content lg:hover:bg-midnight-4 hover:cursor-pointer bg-midnight">
              <img src={book.pic} alt="How to Talk to Anyone" loading="lazy" className="object-contain flex-shrink-0 rounded w-44 h-44" />
              <div className="w-full flex flex-col relative mt-2">
                <div className="line-clamp-2 font-bold text-h5 text-white" data-test-id="title" title="How to Talk to Anyone">{book.title}</div>
                <div data-test-id="subtitle" title="Leil Lowndes" className="font-medium text-caption line-clamp-2 mt-1 text-gray-100">{book.author}</div>
                <div data-test-id="description" title="92 Little Tricks for Big Success in Relationships" className="text-caption line-clamp-3 mt-2 text-white">{book.desc}</div>
                <div className="text-mid-grey text-caption mt-2">
                  <div className="flex gap-x-2 text-gray-100">
                    <div className="flex gap-x-1 items-center">
                      <div className="rounded p-1 bg-green-100 text-gray-600">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0h14.5v10.5H13v-9H1.5v16h7V19H0V0z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.25 6h-8V4.5h8V6zM11.25 9h-8V7.5h8V9zM7.25 12h-4v-1.5h4V12zM19 22.5h1.51c1.2 0 1.99-.884 1.99-1.75S21.71 19 20.51 19H19v3.5zm1.51 1.5c1.925 0 3.49-1.457 3.49-3.25s-1.565-3.25-3.49-3.25H17.5V24h3.01zM9 19H7.49c-1.2 0-1.99.884-1.99 1.75s.79 1.75 1.99 1.75H9V19zm-1.51-1.5C5.566 17.5 4 18.957 4 20.75S5.565 24 7.49 24h3.01v-6.5H7.49z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.75 15.466c0-3.382 2.903-5.716 6.25-5.716s6.25 2.334 6.25 5.716V18h-1.5v-2.534c0-2.384-2.051-4.216-4.75-4.216s-4.75 1.832-4.75 4.216V18h-1.5v-2.534z" fill="currentColor"></path></svg>
                      </div>
                      <span>{book.time}</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path fillRule="evenodd" clipRule="evenodd" d="M9.31 9.262l-6.198.947 4.49 4.602-1.04 6.382L12 18.186l5.439 3.007-1.041-6.382 4.49-4.602-6.198-.947L12 3.53 9.31 9.262zM8.292 7.9L0 9.167l6 6.15L4.584 24 12 19.9l7.417 4.1L18 15.317l6-6.15L15.708 7.9 12 0 8.292 7.9z"></path></svg>
                      {book.star}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button data-test-id="slideRight" aria-label="slide right" type="button" className="hidden disabled:text-light-grey md:block text-white" onClick={scrollRight}>
        <RightOutlined className="w-6" style={{ color: '#fff', fontSize: '1.5rem' }} />
      </button>
    </div>
  )
}