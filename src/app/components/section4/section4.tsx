import CarouselItem from "./carouselItem";
import MyCarousel from "./myCarousel"

const staticData = [
  {
    pic: '/imgs/section4/1.png',
    title: 'Bite-sized bestsellers',
    extra: 'with book summaries',
    content: 'Get powerful ideas in minutes—not hours or days with our summaries of today’s most transformative books.',
    bg: 'bg-blue-100',
  },
  {
    pic: '/imgs/section4/2.png',
    title: 'An expert in your ear',
    extra: 'with Guides',
    content: 'Let a pro lead you through today’s must-know topics and apply what you learn right away with interactive tools and activities.',
    bg: 'bg-purple-100',
  },
  {
    pic: '/imgs/section4/3.png',
    title: 'Learning, but social',
    extra: 'with Spaces',
    content: 'Make a learning playlist for yourself, share with others (you can finally start that book club!), or follow thought leaders’ Spaces to get inspired.',
    bg: 'bg-yellow-100',
  },
];

export default function Section4() {

  const data = staticData.map((item, i) => (
    <CarouselItem key={i} data={item} />
  ))

  return (
    <div>
      <h2 className="text-h2 text-midnight md:mb-8 md:text-h0 mb-4 text-center font-bold">How will you level up?</h2>
      <p className="text-p1 text-dark-grey md:mb-12 md:text-p0 mx-4 mb-8 text-center">Listen, read, or get interactive—however you like to learn, you'll find it here!</p>
      <MyCarousel data={data} />
    </div>
  )
}