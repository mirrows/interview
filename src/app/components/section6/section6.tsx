import data from "../section3/mockData"

export default function Section6() {
  const staticData = [
    {
      img: '/imgs/section6/1.png',
      imgExtra: '/imgs/section6/1_extra.png',
      color: 'red',
      title: 'Driving',
    },
    {
      img: '/imgs/section6/2.png',
      color: 'purple',
      title: 'Doing chores',
    },
    {
      img: '/imgs/section6/3.png',
      color: 'purple',
      title: 'Commuting',
    },
    {
      img: '/imgs/section6/4.png',
      color: 'green',
      title: 'Training',
    }
  ]
  return (
    <div>
      <div className="mx-4">
        <h2 className="text-h2 text-midnight md:text-h0 mb-4 text-center font-bold">Grow wherever you are</h2>
        <p className="text-p1 text-dark-grey md:text-p0 mx-auto mb-12 max-w-3xl text-center">Forget carving out time. Slip in a little learning in the car, waiting in line, over lunch, before bed, or whenever you’ve got a moment.</p>
      </div>
      <div className="bg-red-100 bg-purple-100 bg-green-100 text-red-100 text-purple-100 text-green-100"></div>
      <div className="overflow-hidden">
        <div className="lg:justify-center -mb-8 flex snap-x scroll-px-4 flex-row gap-6 overflow-auto px-4 pb-8">
          {staticData.map((item, i) => (
            <div key={i} className={`flex max-w-none snap-start flex-col items-center ${i === 1 ? 'md:order-first' : ''} ${i === 1 || !(i % 2) && i > 1 ? ' md:mt-12' : ''}`}>
              <h3 className={`text-p1 text-dark-grey z-20 -mb-4 rounded-lg px-2 py-1 font-medium bg-${item.color}-100`}>{item.title}</h3>
              <picture>
                <source media="(min-width: 768px)" srcSet={item.img} width="277" height="343" />
                <source srcSet={item.imgExtra || item.img} width="222" height="281" />
                <img fetchPriority="auto" alt="A person driving a car whilst listening to blinks on Blinkist" src={item.img} className="max-w-none" loading="lazy" decoding="async" width="222" height="281" />
              </picture>
              {!i && <picture className="pt-3">
                <source media="(min-width: 768px)" width="185" height="90" />
                <source srcSet="/imgs/section6/1_tag.png" width="185" height="90" />
                <img fetchPriority="auto" alt="logos" src="/imgs/section6/1_tag.png" className="max-w-none" loading="lazy" decoding="async" width="185" height="90" />
              </picture>}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}