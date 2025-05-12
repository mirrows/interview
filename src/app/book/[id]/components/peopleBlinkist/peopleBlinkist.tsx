import GetStartBtn from "@/components/getStartBtn/getStartBtn";
import RateStar from "@/components/rateStar/rateStar";
import Icon, { ExclamationCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

export default function PeopleBlinkist() {
  const staticData = [
    {
      name: 'Sven O.',
      rate: 5,
      content: <>It's <strong>highly addictive</strong> to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.</>
    },
    {
      name: 'Sven O.',
      rate: 5,
      content: <>It's <strong>highly addictive</strong> to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.</>
    },
    {
      name: 'Sven O.',
      rate: 5,
      content: <>It's <strong>highly addictive</strong> to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.</>
    },
  ]
  return (
    <div className="flex-col  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
      <div className="flex flex-col items-center w-full flex-1 md:px-6 mb-12 md:mb-16">
        <div className="mb-8 md:mb-12 text-center text-midnight relative font-bold text-h2">
          People ❤️ Blinkist
          <Tooltip color="#03314b" autoAdjustOverflow={false} placement="topRight" title={'The following reviews are sourced from the Apple App Store or the Google Play Store, and as such Blinkist has no possibility of its own to technically verify them. Both Apple and Google state that they ensure that only users who have actually downloaded the app can submit a review. Please refer to the respective guidelines of the two providers for more information.'}>
            <ExclamationCircleOutlined className="w-4 h-4 block !align-top" style={{ height: 'fit-content' }} />
          </Tooltip>
        </div>
        <div className="md:px-14  flex md:justify-center max-w-3xl flex-col ">
          {staticData.map((item, i) => (
            <div key={i} className="bg-yellow-100 p-4 rounded grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] gap-y-2 md:gap-x-2 min-w-[256px] mb-8 mr-0">
              <div className="flex flex-col md:flex-row md:items-center col-span-2">
                <div className="flex flex-col align-bottom justify-end mb-2 md:mr-2 md:mb-0 font-medium text-midnight">{item.name}</div>
                <RateStar value={item.rate} color="#0365f2" />
              </div>
              <p className="text-dark-grey font-normal col-span-2">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <GetStartBtn content="Start your free trial" className="w-full md:max-w-[24rem] rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed px-4 bg-green text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white py-3" />
        </div>
      </div>

    </div>
  )
}