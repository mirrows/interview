"use client"
import { useEffect, useState } from 'react';
import mockData from './mockData'
import MySwiper from './mySwiper';
import Icon from '@ant-design/icons';
import AudioCard from '@/components/audioCard/audioCard';
import GetStartBtn from '@/components/getStartBtn/getStartBtn';

export default function Section3() {
  const [lines, setLines] = useState<typeof mockData>([]);
  const [currentItem, setCurrentItem] = useState<(typeof mockData)[number][number]>();
  const [showSwiper, setShowSwiper] = useState<boolean>(false);

  const updateSwiperWidth = () => {
    const width = window.innerWidth;
    setShowSwiper(width >= 1024)
  }
  useEffect(() => {
    setLines(mockData)
    setCurrentItem(mockData[0]?.[0])
    updateSwiperWidth();
    addEventListener('resize', updateSwiperWidth);
    return () => {
      removeEventListener('resize', updateSwiperWidth);
    }
  }, [])
  return (
    <div className="md:gap-12 flex flex-col gap-8">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-h2 text-midnight md:mb-6 md:text-h0 mb-4 text-center font-bold">A world of knowledge in your pocket</h2>
        <p className="text-p1 text-dark-grey md:text-p0 text-center">What are you interested in?</p>
      </div>
      <div className="scrollbar-hidden flex flex-col items-start gap-4 overflow-auto lg:pl-[16%]">
        {
          lines.map((line, i) => (
            <div key={i} className="flex flex-row gap-4 px-4">
              {line.map((item, j) => (
                <button key={item.id} type="button" className={`text-midnight flex flex-row items-center gap-2 rounded-lg px-6 py-3 bg-[#eff5f3] cursor-pointer ${currentItem?.id === item.id ? 'bg-yellow-100' : ''}`} onClick={() => setCurrentItem(item)}>
                  <Icon component={() => item.icon} style={{ fontSize: '1.5rem' }}></Icon>
                  <div className="font-medium whitespace-nowrap">{item.name}</div>
                </button>
              ))}
            </div>
          ))
        }
      </div>
      <div className={`relative flex flex-row items-center justify-center px-4 m-auto`}>
        {showSwiper && <MySwiper data={currentItem?.list || []} />}
      </div>
      {showSwiper || <div className='scrollbar-hidden w-full overflow-x-auto' style={{ height: '24.5rem', position: 'relative' }}>
        <div className='flex h-full'>
          {
            currentItem?.list?.map((item, i) => (
              <div key={i} className='px-4'>
                <AudioCard data={item} />
              </div>
            ))
          }
        </div>
      </div>}
      <GetStartBtn className='cursor-pointer inline-flex items-center justify-center m-auto whitespace-nowrap text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green hover:bg-green-200 text-midnight sm:max-w-74 w-full rounded-lg' />
    </div >
  )
}