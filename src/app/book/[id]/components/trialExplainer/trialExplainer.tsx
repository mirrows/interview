import GetStartBtn from "@/components/getStartBtn/getStartBtn";

export default function TrialExplainer() {
  return (
    <div>
      <div className=" flex w-full max-w-[80rem] mx-auto  md:px-12 px-4 ">
        <div className="text-midnight py-12  md:py-16">
          <h2 className="mb-4 text-center font-bold text-h3  md:text-h2"> A small investment, an incredible growth opportunity </h2>
          <div className="text-center mb-6  md:mb-12  md:text-p0">
            Get access to powerful ideas from
            <span className="bg-purple-100">more than 5,500 nonfiction books and podcasts.</span>
          </div>
          <div className="flex flex-col  md:flex-row  md:items-start mb-6  md:mb-12">
            <div className="grid grid-cols-[auto,1fr] gap-0  md:grid-cols-1 w-full">
              <div className="relative flex flex-col w-4 mr-5 items-center justify-between row-span-2  md:rows-span-1  md:order-1  md:w-full  md:h-4  md:mr-0  md:my-2  md:flex-row">
                <div className="w-4 h-4 z-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                </div>
                <div className=" absolute h-full mx-auto  md:mx-0  md:w-full bg-blue-500 w-1  md:h-1"></div>
              </div>
              <div className="text-blue text-h4 font-bold w-full -mt-1  md:order-0  md:text-h3  md:mt-0"> Today </div>
              <div className="text-dark-grey text-base w-full mb-5  md:order-2  md:pr-6  md:mb-0"> Start enjoying the entire library of Blinks and shows. </div>
            </div>
            <div className="grid grid-cols-[auto,1fr] gap-0  md:grid-cols-1 w-full">
              <div className="relative flex flex-col w-4 mr-5 items-center justify-between row-span-2  md:rows-span-1  md:order-1  md:w-full  md:h-4  md:mr-0  md:my-2  md:flex-row">
                <div className="w-4 h-4 z-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 text-white"><path d="M20.605 15.372v-4.096a8.54 8.54 0 00-1.432-4.783 8.698 8.698 0 00-3.875-3.197 1.633 1.633 0 000-.34 3.318 3.318 0 00-1.105-2.11A3.397 3.397 0 0011.946 0c-.829 0-1.628.301-2.247.847a3.319 3.319 0 00-1.105 2.11c-.01.12-.01.24 0 .36a8.737 8.737 0 00-3.786 3.22 8.581 8.581 0 00-1.392 4.739v3.777a3.437 3.437 0 01-.972 2.458A3.523 3.523 0 010 18.576V20.7h7.82a4.239 4.239 0 001.51 2.375c.762.6 1.707.926 2.68.926.974 0 1.92-.327 2.68-.926a4.239 4.239 0 001.51-2.375H24v-2.123a3.504 3.504 0 01-2.327-.951 3.42 3.42 0 01-1.068-2.253z" fill="currentColor"></path></svg>
                </div>
                <div className=" absolute h-full mx-auto  md:mx-0  md:w-full bg-blue-500 w-1  md:h-1"></div>
              </div>
              <div className="text-blue text-h4 font-bold w-full -mt-1  md:order-0  md:text-h3  md:mt-0"> Day -2 </div>
              <div className="text-dark-grey text-base w-full mb-5  md:order-2  md:pr-6  md:mb-0"> We’ll send you a <strong>reminder</strong> email that your trial is ending. </div>
            </div>
            <div className="grid grid-cols-[auto,1fr] gap-0  md:grid-cols-1 w-full">
              <div className="relative flex flex-col w-4 mr-5 items-center justify-between row-span-2  md:rows-span-1  md:order-1  md:w-full  md:h-4  md:mr-0  md:my-2  md:flex-row">
                <div className="w-4 h-4 z-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"></div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-200 self-end z-10 -mb-1  md:mb-0  md:-mr-1  md:-rotate-90"><path fillRule="evenodd" clipRule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path><mask id="a" maskUnits="userSpaceOnUse" x="1" y="6" width="22" height="13"><path fillRule="evenodd" clipRule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="#fff"></path></mask></svg>
                <div className=" absolute h-full mx-auto  md:mx-0  md:w-full bg-blue-200 w-0.5  md:h-0.5"></div>
              </div>
              <div className="text-blue text-h4 font-bold w-full -mt-1  md:order-0  md:text-h3  md:mt-0"> Day 0 </div>
              <div className="text-dark-grey text-base w-full mb-5  md:order-2  md:pr-6  md:mb-0"> Free trial ends. </div>
            </div>
          </div>
          <div className="w-full p-6  md:px-12 bg-blue-100  md:flex items-center rounded">
            <p className="text-dark-grey mb-6 w-full  md:mr-8  md:mb-0">Enjoy unlimited access for . Love it and keep investing in yourself for only <strong><span className="currency-symbol currency-symbol--usd">$</span>8.34</strong> a month, or <strong>simply cancel before May 11 and you won’t ever be charged.</strong></p>
            <GetStartBtn content="Start your free trial" href="/en/onboarding/matrix" className="w-full  md:max-w-74  md:flex-shrink inline-block px-4 rounded border-none font-cera-pro font-medium text-base leading-5 text-center no-underline outline-none cursor-pointer disabled:cursor-not-allowed bg-green text-midnight hover:bg-green-2 hover:text-midnight py-3" />
          </div>
        </div>
      </div>
    </div>
  )
}