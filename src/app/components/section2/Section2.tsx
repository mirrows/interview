import GetStartBtn from "@/components/getStartBtn/getStartBtn"
import PlayVideo from "@/components/playVideo/playVideo"
import RateStar from "@/components/rateStar/rateStar";
import TotalData from "@/components/totalData/totalData";

export default function Section2() {
  const staticData = [
    {
      img: '/imgs/headphones.png',
      line1: 'Read & listen to key insights',
      line2: 'Boost your personal growth with bestsellers and podcasts’ summaries.',
    },
    {
      img: '/imgs/brain-reading.png',
      line1: 'Feed your curiosity',
      line2: 'Personal recommendations to dive into 7,500+ titles and hundreds of topics.',
    },
    {
      img: '/imgs/person-finding-books.png',
      line1: 'Find your next book',
      line2: 'Personalized book recommendations to help you discover new and exciting titles.',
    }
  ];

  const footerStaticData = [
    {
      img: <img src="/imgs/download.svg" alt="download" className="text-blue md:mb-4 mb-2 h-12 w-12" />,
      line1: '37 Million',
      line2: 'Downloads on all platforms',
    },
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
      img: <img src="/imgs/seed.svg" alt="download" className="text-blue md:mb-4 mb-2 h-12 w-12" />,
      line1: '10+ years',
      line2: 'Experience igniting personal growth',
    }
  ]
  return (
    <div>
      <div className="m:gap-16 flex flex-col items-center gap-8 px-4 m:mx-12">
        <div>
          <div className="md:gap-16 flex flex-col items-center gap-8 px-4 md:mx-12">
            <div>
              <div className="lg:mb-6 relative mb-8">
                <h2 className="text-h2 text-midnight md:max-w-[32rem] md:text-h1 mx-auto mb-0 max-w-[22rem] text-center font-bold">
                  Understand key ideas in 15 minutes
                </h2>
                <img src="/imgs/titleLine.svg" alt="Understand key ideas in 15 minutes" className="text-summer-yellow absolute inset-x-1/2 -bottom-2 w-33.5 -translate-x-1/2" />
              </div>
              <div className="md:gap-12 flex w-full flex-row justify-center gap-8">
                <div className="container max-w-[25rem]">
                  <div className="md:px-0 flex flex-col gap-8 md:gap-12 px-0">
                    {staticData.map((data, i) => (
                      <div key={i} className="md:flex-col flex gap-4">
                        <img fetchPriority="auto" alt="Headphones" src={data.img} loading="lazy" decoding="async" width="80" height="80" />
                        <div>
                          <p className="text-h4 text-midnight md:text-h35 mb-2 font-bold">{data.line1}</p>
                          <p className="text-dark-grey md:text-xl text-base">{data.line2}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:flex hidden items-center">
                  <PlayVideo poster="https://static.blinkist.com/cdn-cgi/image/quality=20,width=768,format=webp/https://static.blinkist.com/web-growth/homepage/video-poster.png?c=365">
                    <source data-src="https://static.blinkist.com/web-growth/homepage/video-en.webm?c=365" type="video/webm" src="https://static.blinkist.com/web-growth/homepage/video-en.webm?c=365" />
                    <source data-src="https://static.blinkist.com/web-growth/homepage/video-en.c.mp4?c=365" type="video/mp4" src="https://static.blinkist.com/web-growth/homepage/video-en.c.mp4?c=365" />
                    <track kind="captions" label="English" />
                  </PlayVideo>
                </div>
              </div>
            </div>
            <div className="md:gap-12 flex flex-col items-center gap-8">
              <GetStartBtn href="/en/onboarding/matrix" className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-green hover:bg-green-2 text-midnight sm:max-w-74 w-full rounded-lg" />
              <div className="mx-auto max-w-2xl">
                <p className="font-tisa-pro text-p1 text-midnight md:text-p0 mb-2 text-center italic">
                  “
                  <span className="font-bold">Great app.</span>
                  Addicting. Perfect for wait times, morning coffee, evening before bed. Extremely well written, thorough, easy to use.”
                </p>
                <div className="mb-1 flex w-full flex-row justify-center gap-1">
                  <RateStar />
                </div>
                <p className="text-caption text-dark-grey mb-0 text-center">Renee D.</p>
              </div>
              <div className="md:grid-cols-3 grid grid-cols-1 items-start gap-8 text-center text-h2">
                <TotalData data={footerStaticData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}