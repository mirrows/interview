"use client"
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

type Props = {
  data: {
    title: string;
    content: string | React.ReactNode;
  }[];
}

export default function MyCollapse({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>();
  const updateActive = (i: number) => {
    setActiveIndex(val => val === i ? undefined : i)
  }
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className="border-gray-300 md:py-8 border-b py-4">
          <div className="flex cursor-pointer list-none justify-between [&::-webkit-details-marker]:hidden" onClick={() => updateActive(i)}>
            <h3 className="text-h4 font-bold">{item.title}</h3>
            <div className="self-center">
              <DownOutlined className={`transition-700 linear ml-4 h-6 w-6 transition-transform ${activeIndex === i ? '-scale-y-100 transform' : ''}`} style={{ fontSize: '1.5rem' }} />
            </div>
          </div>
          <div className={`with-styled-ul-list with-styled-ol-list text-gray-500 md:mt-6 md:pr-10 mt-4 overflow-hidden ${activeIndex === i ? 'animate-expand-height max-h-[100rem] opacity-100' : 'max-h-0 opacity-75 !mt-0'}`}>
            {item.content}
          </div>
        </div>
      ))}
    </>

  )

}