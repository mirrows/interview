
"use client"
import { Tooltip } from "antd";
import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';
import RateStar from "@/components/rateStar/rateStar";
import { useRef } from "react";
import './section5.css'

type CustomIconComponentProps = GetProps<typeof Icon>;

const content = <span>The following reviews are sourced from the Apple App Store or the Google Play Store, and as such Blinkist has no possibility of its own to technically verify them. Both Apple and Google state that they ensure that only users who have actually downloaded the app can submit a review. Please refer to the respective guidelines of the two providers for more information.</span>

const Semicolon = <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 text-background-red"><path d="M29.3692 33.1982C32.5892 33.1982 35.2012 30.5122 35.2012 27.1982C35.2012 23.8862 32.5892 21.1982 29.3692 21.1982C23.5392 21.1982 27.4252 9.60024 35.2012 9.60024V6.80024C21.3232 6.79824 15.8852 33.1982 29.3692 33.1982ZM12.5692 33.1982C15.7872 33.1982 18.3992 30.5122 18.3992 27.1982C18.3992 23.8862 15.7872 21.1982 12.5692 21.1982C6.73717 21.1982 10.6232 9.60024 18.3992 9.60024V6.80024C4.52317 6.79824 -0.914829 33.1982 12.5692 33.1982Z" fill="currentColor"></path></svg>

export default function Section5() {
  const parentNodeRef = useRef<HTMLDivElement>(null);
  const staticData = [
    {
      role: "Leaders",
      color: "red",
      pic: "/imgs/section5/section5-1.png",
      content: <> Most CEOs read a book a week. Many use programs like this to acquire key concepts that <span className="font-bold">help them keep a fresh perspective helping hone vision, strategy and action.</span></>
    },
    {
      role: "Upskillers",
      color: "blue",
      pic: "/imgs/section5/section5-2.png",
      content: <>Life changing. The concept of being able to <span className="font-bold">grasp a book's main point in such a short time</span> truly opens multiple opportunities to grow every area of your life at a faster rate.</>
    },
    {
      role: "Lifelong learners",
      color: "purple",
      pic: "/imgs/section5/section5-3.png",
      content: <><span className="font-bold">This is simply the coolest app that exists.</span> Deserved full credit. It's much nicer to spend your time learning new knowledge, rather than spending hours browsing social media.</>
    }
  ]
  const footerStaticData = [
    {
      persent: '95%',
      content: 'of Blinkist members read significantly more than before*',
    },
    {
      persent: '91%',
      content: 'of Blinkist members create better habits*',
    },
    {
      persent: '87%',
      content: 'have made positive changes in their lives thanks to Blinkist*',
    },
  ]
  return (
    <div className="md:gap-12 flex max-w-[80rem] flex-col items-center gap-8 md:px-8 mx-auto px-4">
      <h3 ref={parentNodeRef} className="text-h2 text-midnight md:text-h0 mx-auto max-w-3xl text-center font-bold pm-parent-node">
        Join 31+ million people growing with Blinkist
        <Tooltip getPopupContainer={() => parentNodeRef.current || document.body} placement="bottom" title={content} arrow={false} trigger="click">
          <button type="button" className="ml-2 inline-block align-text-top outline-hidden">
            <span className="text-base">ⓘ</span>
          </button>
        </Tooltip>

      </h3>
      <div className="bg-red-100 bg-blue-100 bg-purple-100 text-red-100 text-blue-100 text-purple-100"></div>
      <div className="md:grid md:grid-cols-2 md:gap-16 lg:grid-cols-3 flex flex-col gap-8">
        {staticData.map((data, i) => (<div key={i} className={`flex flex-col gap-4 md:flex-row ${!(i % 2) ? 'md:mt-16' : ''} lg:flex ${i > 1 ? 'md:hidden' : ''}`}>
          <div className="md:flex-col-reverse md:items-center md:justify-end md:gap-2 flex shrink-0 flex-row items-end gap-4">
            <img alt="A Blinkist user" src={data.pic} className="w-fit rounded-2xl" width="112" height="138" />
            <div>
              <h3 className={`-ml-8 rounded-lg px-2 py-1 text-center font-medium text-gray-700 md:ml-0 bg-${data.color}-100`}>{data.role}</h3>
              <span className="md:hidden">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-16 text-${data.color}-100`}><path d="M29.3692 33.1982C32.5892 33.1982 35.2012 30.5122 35.2012 27.1982C35.2012 23.8862 32.5892 21.1982 29.3692 21.1982C23.5392 21.1982 27.4252 9.60024 35.2012 9.60024V6.80024C21.3232 6.79824 15.8852 33.1982 29.3692 33.1982ZM12.5692 33.1982C15.7872 33.1982 18.3992 30.5122 18.3992 27.1982C18.3992 23.8862 15.7872 21.1982 12.5692 21.1982C6.73717 21.1982 10.6232 9.60024 18.3992 9.60024V6.80024C4.52317 6.79824 -0.914829 33.1982 12.5692 33.1982Z" fill="currentColor"></path></svg>
              </span>
            </div>
          </div>
          <div>
            <span className="md:block mb-5 hidden">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-16 text-${data.color}-100`}><path d="M29.3692 33.1982C32.5892 33.1982 35.2012 30.5122 35.2012 27.1982C35.2012 23.8862 32.5892 21.1982 29.3692 21.1982C23.5392 21.1982 27.4252 9.60024 35.2012 9.60024V6.80024C21.3232 6.79824 15.8852 33.1982 29.3692 33.1982ZM12.5692 33.1982C15.7872 33.1982 18.3992 30.5122 18.3992 27.1982C18.3992 23.8862 15.7872 21.1982 12.5692 21.1982C6.73717 21.1982 10.6232 9.60024 18.3992 9.60024V6.80024C4.52317 6.79824 -0.914829 33.1982 12.5692 33.1982Z" fill="currentColor"></path></svg>
            </span>
            <div className="mb-2 flex flex-row gap-1">
              <RateStar />
            </div>
            <p className="font-tisa-pro text-p1">{data.content}</p>
          </div>
        </div>))}
      </div>
      <div>
        <div className="md:mb-8 md:grid-cols-3 mb-4 grid grid-cols-1 gap-8 text-center">
          {footerStaticData.map((item, i) => (<div key={i}>
            <span className="font-tisa-pro text-h1 text-midnight mb-2 font-bold">{item.persent}</span>
            <p className="text-p0 text-dark-grey">{item.content}</p>
          </div>))}
        </div>
        <p className="text-caption text-grey-300 text-center">* Based on internal study using survey data from general Blinkist customers</p>
      </div>
    </div>
  )

}