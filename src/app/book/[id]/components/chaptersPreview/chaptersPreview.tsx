"use client"
import RegistorOrLogin from '@/components/registorOrLogin/registorOrLogin';
import { eventBus } from '@/utils/common';
import { BulbOutlined, DownOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import mockData from './mockData';
import './chaptersPreview.css';

type Props = {
  title: string;
};

export default function ChaptersPreview({ title }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0); // 初始索引为 0
  const targetRef = useRef<HTMLDivElement>(null);
  const chapters = mockData;
  const updateChapter = (index: number) => {
    if (targetRef) {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标元素的顶部
    }
    setCurrentIndex(index); // 更新索引
  };
  const openModal = () => {
    eventBus.emit('showRegistorOrLoginModal', 'login')
  }
  return (
    <div id="chapters-preview" className="relative mb-0 lg:mb-12 py-12 lg:py-16 bg-[#f8faf9]">
      <div className="flex flex-col  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <div className="w-full px-2 lg:px-12 bg-white pt-12">
          <h2 className="text-midnight mb-4 max-w-3xl font-bold text-h3 md:text-h2">
            The 5 AM Club
            <span className="font-normal">
              <br />
              <span className="bg-yellow-300">Summary of 6 key ideas</span>
            </span>
          </h2>
          <div className="flex items-center text-gray-500 text-caption lg:text-p1">
            <BulbOutlined />
            Audio & text in the Blinkist app
          </div>
        </div>
        <div className='grid bg-white pt-12 md:px-8 lg:grid-cols-3 lg:gap-x-16 px-2 lg:px-12 lg:rounded'>
          <div ref={targetRef} className="text-h4 font-bold mb-12 text-midnight lg:col-span-3">
            <span>{currentIndex ? `Key idea ${currentIndex} of 6` : 'Introduction'}</span>
          </div>
          {chapters.map((chapter, i) => (
            <div key={i} className={`font-tisa-pro lg:col-span-2 ${currentIndex === i ? '' : 'hidden'}`}>
              <h2 className="text-midnight mb-6 font-bold text-h3">{chapter.title}</h2>
              <div className='text-grey-500'>
                {chapter.content}
              </div>
              {i > 1 && < button className="text-blue-500 font-cera-pro">Read more</button>}
            </div>
          ))}
          <div className='w-full sm:border-x border-y border-gray-300 sm:rounded-md my-8 mx-auto sm:px-4 max-w-sm lg:order-1 lg:col-span-2'>

            <div className="mt-8 mb-4 text-center font-bold text-h5">Want to see all full key ideas from {title}?</div>
            <div className='mb-4 w-6 h-6 mx-auto'>
              <DownOutlined style={{ fontSize: '1.5rem' }} />
            </div>
            {/* registor modal */}
            <RegistorOrLogin type="registor" />
            <button className="text-blue-500 font-cera-pro w-full mb-6" onClick={openModal}>
              Already have an account?
            </button>
          </div>
          <div className="row-span-2">
            <h2 className="text-h4 font-bold text-midnight mb-2">Key ideas in {title}</h2>
            <ul>
              {chapters.map((chapter, i) => (
                <li key={i} className="border-b border-gray-500 last-of-type:border-none">
                  <button data-test-chapter-index="0" className="py-4 flex items-center outline-none w-full" onClick={() => updateChapter(i)}>
                    {i ? <div className="text-h3 font-bold text-midnight mr-4">{i}</div> : null}
                    <h3 className="text-gray-400 text-h6 text-left">{i ? chapter.title : 'Introduction'}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div >
  );
}