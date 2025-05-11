import { BookData } from "@/types/common";
import './moreKnowledge.css'

type Props = {
  data: BookData;
}

export default function MoreKnowledge({ data }: Props) {
  const staticData = [
    {
      title: 'Read or listen',
      content: 'Get the key ideas from nonfiction bestsellers in minutes, not hours.',
      pic: '/imgs/books/moreKnowledge/key_ideas.svg',
      isNew: false,
    },
    {
      title: 'Find your next read',
      content: 'Get book lists curated by experts and personalized recommendations.',
      pic: '/imgs/books/moreKnowledge/bulb.svg',
      isNew: false,
    },
    {
      title: 'Shortcasts',
      content: 'We’ve teamed up with podcast creators to bring you key insights from podcasts.',
      pic: '/imgs/books/moreKnowledge/shortcast.svg',
      isNew: true,
    }
  ]
  return (
    <>
      <div className="flex-col flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <div className="flex flex-col mb-24">
          <div className="text-midnight text-center mb-6 font-bold text-h3 md:text-h2"> More knowledge in less time </div>
          <div className="w-full flex flex-col md:flex-row gap-6 lg:gap-8">
            {staticData.map((item, i) => (
              <div key={i} className="flex md:flex-col items-center w-full">
                <img src={item.pic} alt="Read or listen" loading="lazy" className="object-contain w-16 h-16 mr-6 md:mr-0 md:mb-6 flex-shrink-0" />
                <div className="flex flex-col md:contents md:text-center">
                  <div className="text-midnight font-bold md:mb-2 md:text-h3 relative">{item.title}{item.isNew && <sup className="absolute text-sm text-red-500 uppercase font-bold ml-1 mt-1"> New </sup>}</div>
                  <div className="text-dark-grey md:text-xl">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="about-the-book-section" className="flex flex-col w-full mb-12  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <h2 className="font-bold text-h35 text-midnight mb-4 md:w-2/3">What is <span className="font-normal italic">{data.title}</span> about?</h2>
        <div className="text-dark-grey text-p1 md:w-2/3">
          <p>{data.about}</p>
        </div>
      </div>
      <div className="flex-col  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <div id="book-review-section" className="mb-12 md:w-2/3">
          <h2 className="text-midnight mb-4 font-bold text-h35">
            <span className="font-normal italic">The 5 AM Club</span> Review
          </h2>
          <div className="text-dark-grey text-p1 with-styled-ul-list with-styled-ol-list">
            {data.review}
          </div>
        </div>
      </div>
      <div id="book-quotes" data-toc="" className="flex flex-col mb-12  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <h2 className="font-bold text-h35 text-midnight mb-4 max-w-2xl md:text-center md:mx-auto">Best quote from <span className="font-normal italic">{data.title}</span></h2>
        <div className="pt-8 md:py-8 max-w-4xl mx-auto">
          <div className="rounded-2xl px-4 md:px-6 py-8 md:mx-44 relative" style={{ backgroundColor: data.color }}>
            <img src="/imgs/books/moreKnowledge/quoteLeft.svg" className=" text-midnight absolute -left-0.5 w-18 -top-10 md:w-36 md:-top-12 md:-left-44 " alt="" />
            <div className="md:flex md:justify-between">
              <div className="md:flex md:flex-col">
                <div className="font-tisa-pro text-midnight font-semibold text-xl md:text-h3">
                  <em><p><em>{data.bastQuote}</em></p></em>
                </div>
                <div className="font-medium text-base uppercase text-dark-grey text-caption mt-4"> —{data.bastQuoteFrom} </div>
              </div>
              <img src={data.pic} alt="example alt text" loading="lazy" className="object-contain w-20 md:w-28 h-20 md:h-28 mt-4 md:mt-0 md:ml-4" />
              <img src="/imgs/books/moreKnowledge/quoteLeft.svg" className=" w-8 rotate-180 text-dark-grey opacity-50 absolute right-4 bottom-8 md:w-36 md:text-midnight md:opacity-100 md:-bottom-12 md:-right-44 " alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="who-should-read-section" className="flex flex-col w-full mb-12  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <h2 className="font-bold text-h35 text-midnight mb-4 md:w-2/3">Who should read <span className="font-normal italic">{data.title}</span>?</h2>
        <div className="text-dark-grey text-p1 pl-2 mb-4 md:w-2/3">
          <ul>
            <li>
              <div>Those who feel they could try and get more out of the day</div>
            </li>
            <li>
              <div>People who want to achieve great things in life</div>
            </li>
            <li>
              <div>Anyone in need of an energizing and positive morning routine</div>
            </li>
          </ul>
        </div>
        <button data-test-id="openAmazonLink" className="flex  cursor-pointer text-blue-500 hover:text-blue-900">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 w-6 h-6"><path d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"></path></svg>
          <span className="font-bold"> Buy on Amazon</span>
        </button>
      </div>
      <div id="about-the-author" className="flex flex-col w-full mb-12  flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <h2 className="font-bold text-h35 text-midnight mb-4 md:w-2/3">About the Author</h2>
        <div className="text-dark-grey text-p1 md:w-2/3">
          {data.aboutAuthor}
        </div>
      </div>
      <div className="flex flex-col mb-8 md:mb-12  flex w-full max-w-[80rem] mx-auto md:px-12  ">
        <h2 className="font-bold text-h35 text-midnight mb-4 px-4 md:px-0">Categories with <span className="font-normal italic">{data.title}</span></h2>
        <div className="w-full overflow-hidden">
          <div className=" pb-8 -mb-8 overflow-x-auto overflow-y-hidden flex flex-col">
            <div className="flex flex-row md:flex-wrap px-4 l:px-0 gap-x-4 gap-y-2 mb-4">
              {data.categories.map((category, i) => (
                <a key={i} href={category.href} className="font-cera-pro text-midnight flex w-max items-center py-3 border-2 border-solid rounded last:mr-4 px-4 cursor-pointer md:hover:border-green-300 border-white bg-[#f1f6f4]">
                  <div className="flex w-6 h-6 mr-2 text-midnight flex-shrink-0 " style={{ fontSize: '1.5rem' }}>
                    {category.icon}
                  </div>
                  <span className="block whitespace-nowrap">{category.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )

}