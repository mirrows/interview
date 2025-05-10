"use client"
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import mockData from './mockData'
import AudioCard from '@/components/audioCard/audioCard';
import { useEffect, useMemo, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

type Props = {
  data: (typeof mockData)[number][number]["list"];
}

const fixedWidth = [670, 866, 1080];
// 1024以上的屏幕，每屏显示3/4/5个

export default function MySwiper({ data }: Props) {
  const [enterArr, setEnterArr] = useState<boolean[]>([])
  const [currentSlider, setCurrentSlider] = useState<number>(0)
  const [swiperWidthInd, setSwiperWidth] = useState<number>(0);
  const updateEnterArr = (i: number) => {
    setCurrentSlider(i)
    setEnterArr((val) => val.map((_, j) => i === j ? true : false))
  }
  const [swiper, setSwiper] = useState<any>(null)
  const slideBefore = () => {
    const curSlider = currentSlider - length
    swiper?.slideTo(curSlider);
    setCurrentSlider(curSlider);
    setEnterArr((arr) => arr.map((_, i) => i === curSlider));
  }
  const length = useMemo(() => swiperWidthInd + 3, [swiperWidthInd])
  const slideAfter = () => {
    const curSlider = currentSlider + length
    swiper?.slideTo(curSlider);
    setCurrentSlider(curSlider);
    setEnterArr((arr) => arr.map((_, i) => i === curSlider));
  }

  const updateSwiperWidth = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      setSwiperWidth(-1)
      return;
    }
    if (width < 1142) {
      setSwiperWidth(0)
      return;
    }
    if (width < 1416) {
      setSwiperWidth(1)
      return;
    }
    setSwiperWidth(2)
  }
  useEffect(() => {
    setEnterArr([...Array(data.length)].map((_, i) => !i))
  }, [data])
  useEffect(() => {
    updateSwiperWidth();
    addEventListener('resize', updateSwiperWidth);
    return () => {
      removeEventListener('resize', updateSwiperWidth);
    }
  }, [])
  return (
    swiperWidthInd >= 0 && data.length ? <>
      <button className='absolute right-full cursor-pointer hover:text-blue-700 px-8' disabled={currentSlider - length < 0} style={{ fontSize: '1.5rem' }} onClick={slideBefore}>
        <LeftOutlined />
      </button>
      <div className={`relative flex flex-row items-center justify-center m-auto`} style={{ width: `${fixedWidth[swiperWidthInd]}px` }}>
        <Swiper
          spaceBetween={40}
          slidesPerView="auto"
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => setSwiper(swiper)}
        >
          {data.map((item, i) => (
            <SwiperSlide style={{ width: 'fit-content' }}>
              <AudioCard data={item} hover isEnter={enterArr[i]} onMouseEnter={() => updateEnterArr(i)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className='absolute left-full cursor-pointer hover:text-blue-700 px-8' disabled={currentSlider + length > data.length - 1} style={{ fontSize: '1.5rem' }} onClick={slideAfter}>
        <RightOutlined />
      </button>
    </> : <></>
  )

}