import GetStartBtn from "@/components/getStartBtn/getStartBtn";
import { BookData } from "@/types/common";

type Props = {
  data: BookData;
}

export default function GoalsSection({ data }: Props) {
  return (
    <div className="mb-12">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bottom-12 md:bottom-16 -z-10 bg-yellow-100"></div>
        <div className=" flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
          <div className="w-full pt-12 md:grid md:grid-cols-12 md:gap-x-6 md:px-2">
            <div className="mb-6  md:mb-0  md:col-span-5  md:pt-11">
              <div className="mb-4 font-bold text-midnight text-h3  md:mb-8  md:text-h2"> Powerful ideas from top nonfiction </div>
              <p className="mb-8 text-base  md:text-xl text-dark-grey">Try Blinkist to get the key ideas from <strong>7,500+ bestselling nonfiction titles and podcasts.</strong> Listen or read in just <strong>15 minutes.</strong></p>
              <GetStartBtn className="w-full  md:w-72 inline-block px-4 rounded border-none font-cera-pro font-medium text-base leading-5 text-center no-underline outline-none cursor-pointer disabled:cursor-not-allowed bg-green text-midnight hover:bg-green-2 hover:text-midnight py-3" />
            </div>
            <div className="flex items-center justify-center  md:col-span-7  md:justify-start  md:ml-7">
              <img src="/imgs/books/goalsSection/left.svg" alt="" className="h-16 flex-none text-blue" />
              <div className="relative w-44 flex-none mx-1  md:w-56">
                <img src="/imgs/books/goalsSection/phone.svg" alt="" />
                <div className="absolute top-0 pt-[25%]">
                  <img src="https://static.blinkist.com/wcl/phone-mockup/cover_en.webp" alt="Cover Image for the book 'The 5 AM Club' by Robin Sharma" loading="lazy" width="72%" className="object-contain mx-auto rounded-[5%]" />
                  <div className="w-[80%] mx-auto mt-[5%]">
                    <p className="text-white font-cera-pro font-bold text-center line-clamp-1" style={{ fontSize: '11.872px' }}> Blink 3 of 8 - {data.title} </p>
                    <p className="text-gray-100 font-medium text-center line-clamp-1" style={{ fontSize: '8.288px' }}> by {data.author} </p>
                  </div>
                </div>
              </div>
              <img src="/imgs/books/goalsSection/right.svg" alt="" className="h-16 flex-none text-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}