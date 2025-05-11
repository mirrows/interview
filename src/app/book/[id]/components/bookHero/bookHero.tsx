"use client"
import AudioCard from '@/components/audioCard/audioCard';
import GetStartBtn from '@/components/getStartBtn/getStartBtn';
import { BookData } from '@/types/common';
import { ShareAltOutlined, RightOutlined, StarFilled, FieldTimeOutlined, DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

type Props = {
  data: BookData;
}

export default function BookHero({ data }: Props) {
  const [open, setOpen] = useState(false);
  const staticData = [
    {
      name: 'The 5 AM Club div of 6 key ideas',
      target: '#chapters-preview',
    },
    {
      name: 'What is The 5 AM Club about?',
      target: '#about-the-book-section',
    },
    {
      name: 'The 5 AM Club Review',
      target: '#book-review-section',
    },
    {
      name: 'Best quote from The 5 AM Club',
      target: '#who-should-read-section',
    },
  ]
  const share = () => {
    navigator.share({
      title: "Blinkist",
      text: data.title,
      url: location.href,
    })
  }
  return (
    <div className="flex flex-col pt-6 l:pt-16 relative  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
      <div className="flex justify-between">
        <div className="text-caption mb-6">
          <div className="hidden md:flex text-blue">
            <div className="flex items-center">
              <a data-test-id="b-link" href="/en/content/categories" className=" cursor-pointer text-blue-500 hover:text-blue-500">Categories</a>
            </div>
            <div className="flex items-center">
              <RightOutlined className='w-2.5 h-2.5 mx-1.5' />
              <a data-test-id="b-link" href="/en/content/categories/productivity-and-time-management-en" className=" cursor-pointer text-blue-500 hover:text-blue-500">Productivity</a>
            </div>
            <div className="flex items-center">
              <RightOutlined className='w-2.5 h-2.5 mx-1.5' />
              <div className="text-blue-900">{data.title}</div>
            </div>
          </div>
        </div>
        <div className="contents">
          <button aria-label="Share with friends" className="self-start" onClick={share}>
            <ShareAltOutlined className='w-6 h-6 text-gray-500 cursor-pointer' style={{ fontSize: '1.5rem' }} />
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:gap-16 pb-12 md:pb-16'>
        <div className='w-full h-full md:w-74 shrink-0 md:order-1 rounded-md'>
          <AudioCard
            className="w-full rounded-md"
            cardClassName="w-[11.5rem] md:w-[16.5rem] m-auto block md:my-2"
            name=" Listen to the Intro "
            rounded="md"
            data={{
              id: data.bookId,
              title: data.title,
              audio: data.audio,
              pic: data.pic,
              color: data.color,
            }}
          />
        </div>
        <div className='grow flex flex-col w-full'>
          <h1 className='mb-2 md:mb-4 flex flex-col mt-4 md:mt-0 font-bold text-h3 md:text-h2'>
            <span>{data.title}</span>
            <span className="text-gray-500 mb-2 md:mb-6 flex -order-1 font-medium text-base">
              <svg width="6.375rem" height="1.5rem" viewBox="0 0 102 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.296 12.24C7.872 11.76 8.192 11.072 8.192 10.256C8.192 8.608 6.944 7.44 5.024 7.44H1.328V18H5.856C7.936 18 9.28 16.704 9.28 14.928C9.28 13.616 8.544 12.64 7.296 12.24ZM4.864 8.928C5.936 8.928 6.496 9.488 6.496 10.336C6.496 11.184 5.936 11.776 4.864 11.776H2.992V8.928H4.864ZM5.712 16.512H2.992V13.232H5.712C6.912 13.232 7.568 13.888 7.568 14.88C7.568 15.872 6.912 16.512 5.712 16.512Z" fill="currentColor"></path> <path d="M18.3066 13.568C18.3066 11.504 16.7706 9.96802 14.6746 9.96802C12.3866 9.96802 10.6106 11.776 10.6106 14.08C10.6106 16.4 12.4026 18.176 14.8346 18.176C16.0826 18.176 17.1386 17.696 17.9706 16.912L17.1706 15.76C16.5146 16.336 15.7946 16.688 14.8826 16.688C13.5226 16.688 12.5466 15.92 12.3226 14.624H18.1786C18.2266 14.416 18.3066 14 18.3066 13.568ZM14.6106 11.392C15.6986 11.392 16.6106 12.096 16.6266 13.312H12.3546C12.6106 12.144 13.4906 11.392 14.6106 11.392Z" fill="currentColor"></path> <path d="M23.8636 16.656C22.8876 16.656 22.3116 16.336 22.3116 15.296V11.6H24.6476V10.144H22.3116V8.08002H20.6156V10.144H19.3356V11.6H20.6156V15.44C20.6156 17.344 21.7676 18.176 23.5116 18.176C24.0396 18.176 24.4716 18.096 24.9036 18V16.576C24.4876 16.624 24.1516 16.656 23.8636 16.656Z" fill="currentColor"></path> <path d="M29.7543 16.656C28.7783 16.656 28.2023 16.336 28.2023 15.296V11.6H30.5383V10.144H28.2023V8.08002H26.5063V10.144H25.2263V11.6H26.5063V15.44C26.5063 17.344 27.6583 18.176 29.4023 18.176C29.9303 18.176 30.3623 18.096 30.7943 18V16.576C30.3783 16.624 30.0423 16.656 29.7543 16.656Z" fill="currentColor"></path> <path d="M39.541 13.568C39.541 11.504 38.005 9.96802 35.909 9.96802C33.621 9.96802 31.845 11.776 31.845 14.08C31.845 16.4 33.637 18.176 36.069 18.176C37.317 18.176 38.373 17.696 39.205 16.912L38.405 15.76C37.749 16.336 37.029 16.688 36.117 16.688C34.757 16.688 33.781 15.92 33.557 14.624H39.413C39.461 14.416 39.541 14 39.541 13.568ZM35.845 11.392C36.933 11.392 37.845 12.096 37.861 13.312H33.589C33.845 12.144 34.725 11.392 35.845 11.392Z" fill="currentColor"></path> <path d="M45.322 10.064C44.426 10.064 43.578 10.448 43.034 11.168V10.144H41.466V18H43.146V13.808C43.146 12.352 44.202 11.632 45.45 11.632H45.962V10.144C45.786 10.096 45.594 10.064 45.322 10.064Z" fill="currentColor"></path> <path d="M55.5824 16.656C54.6064 16.656 54.0304 16.336 54.0304 15.296V11.6H56.3664V10.144H54.0304V8.08002H52.3344V10.144H51.0544V11.6H52.3344V15.44C52.3344 17.344 53.4864 18.176 55.2304 18.176C55.7584 18.176 56.1904 18.096 56.6224 18V16.576C56.2064 16.624 55.8704 16.656 55.5824 16.656Z" fill="currentColor"></path> <path d="M62.2774 9.968C61.3174 9.968 60.5334 10.32 60.0054 10.912V6H58.3254V18H60.0054V13.328C60.0054 12.256 60.7574 11.504 61.7974 11.504C62.8374 11.504 63.5094 12.24 63.5094 13.328V18H65.1894V13.088C65.1894 11.248 64.0854 9.968 62.2774 9.968Z" fill="currentColor"></path> <path d="M70.5525 9.96802C69.2245 9.96802 68.0565 10.496 67.2405 11.648L68.2165 12.64C68.8405 11.904 69.4805 11.472 70.3925 11.472C71.4645 11.472 72.0725 12.064 72.0725 13.152V13.664H69.8485C68.0885 13.664 66.9525 14.528 66.9525 15.904C66.9525 17.264 68.0405 18.176 69.6885 18.176C70.7765 18.176 71.6405 17.792 72.2005 17.12V18H73.7685V13.248C73.7685 11.072 72.4405 9.96802 70.5525 9.96802ZM70.0405 16.88C69.2725 16.88 68.6645 16.528 68.6645 15.84C68.6645 15.2 69.1605 14.88 70.0565 14.88H72.0725V15.024C72.0725 16.096 71.1445 16.88 70.0405 16.88Z" fill="currentColor"></path> <path d="M80.0266 9.96802C79.0346 9.96802 78.2186 10.336 77.6746 10.928V10.144H76.1066V18H77.7866V13.312C77.7866 12.24 78.5386 11.488 79.5786 11.488C80.6186 11.488 81.2906 12.24 81.2906 13.312V18H82.9706V13.088C82.9706 11.248 81.8826 9.96802 80.0266 9.96802Z" fill="currentColor"></path> <path d="M92.8181 9.96802C91.4901 9.96802 90.3221 10.496 89.5061 11.648L90.4821 12.64C91.1061 11.904 91.7461 11.472 92.6581 11.472C93.7301 11.472 94.3381 12.064 94.3381 13.152V13.664H92.1141C90.3541 13.664 89.2181 14.528 89.2181 15.904C89.2181 17.264 90.3061 18.176 91.9541 18.176C93.0421 18.176 93.9061 17.792 94.4661 17.12V18H96.0341V13.248C96.0341 11.072 94.7061 9.96802 92.8181 9.96802ZM92.3061 16.88C91.5381 16.88 90.9301 16.528 90.9301 15.84C90.9301 15.2 91.4261 14.88 92.3221 14.88H94.3381V15.024C94.3381 16.096 93.4101 16.88 92.3061 16.88Z" fill="currentColor"></path></svg>
              <span>summary</span>
            </span>
          </h1>
          <div className="flex flex-wrap mb-4 md:mb-6 font-bold text-h5">
            <a href="javascript:void(0)" target="_blank" className="flex with-name-separator cursor-pointer text-blue-500 hover:text-blue-900">
              {data.author}
            </a>
          </div>
          <p className="text-p1 md:text-p0 mb-4 md:mb-6 text-gray-500">{data.desc}</p>
          <div className='grid grid-cols-2 gap-x-8 w-fit md:grid mb-4 md:mb-8'>
            <div className="flex">
              <div className="mr-2 relative text-yellow-500">
                <div className="relative" style={{ width: '1.5rem', height: '1.5rem' }}>
                  <StarFilled className='absolute' style={{ width: '1.5rem', height: '1.5rem', fontSize: '1.5rem' }} />
                </div>
              </div>
              <span className="text-caption"> {data.star} ({data.commentCount} ratings) </span>
            </div>
            <div className="flex">
              <FieldTimeOutlined className="w-6 h-6 mr-2" style={{ fontSize: '1.5rem' }} />
              <span className="text-caption"> {data.time} </span>
            </div>
          </div>
          <GetStartBtn className='mb-8 md:mb-12 md:w-74 rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed bg-green text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white' />
          <div className="mb-4 md:mb-8">
            <h2 className="text-midnight text-h5 font-bold md:text-h35 mb-4"> Brief summary </h2>
            <div className="text-dark-grey text-base md:text-xl with-styled-ul-list with-styled-ol-list">
              <p>{data.summary}</p>
            </div>
          </div>
          <div className="flex flex-col md:px-0 mb-8">
            <div className="text-midnight mb-2 md:px-0 font-bold text-sm leading-normal">Topics</div>
            <div className="w-full overflow-hidden">
              <div className=" pb-8 -mb-8 overflow-x-auto overflow-y-hidden flex flex-row md:flex-wrap l:px-0 gap-x-4 gap-y-2 -mb-2">
                {data.topics.map((topic, i) => (
                  <a key={i} data-test-id="topic-chip-success-en" href="javascript:void(0)" target="_blank" className="font-cera-pro text-midnight flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer md:hover:border-green border-white bg-[#f1f6f4]">
                    <span className="block whitespace-nowrap">{topic}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <details className="mb-8 m:mb-0">
            <summary className="flex items-center text-midnight font-bold text-sm cursor-pointer" onClick={() => setOpen(!open)}>
              Table of Contents
              <DownOutlined className={`${open ? 'transform rotate-180' : ''} w-6 h-6 p-1.5`} />
            </summary>
            <ul>
              {staticData.map((targetData, i) => (
                <li key={i} className="first:mt-4 mb-4 last:mb-0 text-gray-500 font-medium text-sm">
                  <a href={targetData.target} className="underline">{targetData.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

    </div>
  );
}