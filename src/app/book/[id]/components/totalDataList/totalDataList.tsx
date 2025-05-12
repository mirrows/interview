import GetStartBtn from "@/components/getStartBtn/getStartBtn";
import RateStar from "@/components/rateStar/rateStar";
import TotalData from "@/components/totalData/totalData";

export default function TotalDataList() {
  const footerStaticData = [
    {
      img: (
        <div className="md:my-3 mb-2 flex flex-row gap-1 p-2.5">
          <RateStar size="5" color="#0266f2" value={4.7} />
        </div>
      ),
      line1: '4.7 Stars',
      line2: 'Average ratings on iOS and Google Play',
    },
    {
      img: <img src="/imgs/download.svg" alt="download" className="text-blue md:mb-4 mb-2 h-12 w-12" />,
      line1: '37 Million',
      line2: 'Downloads on all platforms',
    },
    {
      img: <img src="/imgs/seed.svg" alt="download" className="text-blue md:mb-4 mb-2 h-12 w-12" />,
      line1: '10+ years',
      line2: 'Experience igniting personal growth',
    }
  ]
  return (
    <div className="flex flex-col items-center mb-12 flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
      <div className="flex flex-col items-center mb-8 md:mb-16">
        <div className="grid gap-x-8 gap-y-6 md:gap-y-2 grid-cols-1 md:grid-cols-3 text-h1">
          <TotalData data={footerStaticData} />
        </div>
      </div>
      <GetStartBtn content="Start your free trial" className="w-full md:max-w-[24rem] rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed px-4 bg-green text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white py-3" />
    </div>
  )
}