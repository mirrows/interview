import GetStartBtn from "@/components/getStartBtn/getStartBtn";

export default function Section1() {
  return (
    <div className='md:mx-12 mx-4'>
      <div className="lg:flex-row lg:gap-7 mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-12 text-center">
        <div className="lg:w-auto lg:items-start relative flex w-full flex-col items-center">
          <h1 className="text-h15 lg:mb-8 lg:text-left lg:text-h0 mb-6 flex flex-col text-center">
            <strong>Learn</strong>
            <span className="italic">something new</span>
            <strong>every day</strong>
          </h1>
          <p className="text-dark-grey md:text-xl lg:text-left mb-8 text-center text-base leading-loose" style={{ lineHeight: 2 }}>
            Get the key ideas from the top <br />
            <span className="px-3 py-1 rounded-full bg-blue-100 text-midnight">books</span>,
            <span className="px-3 py-1 rounded-full bg-yellow-100 text-midnight">podcasts</span>,
            and <span className="px-3 py-1 rounded-full bg-purple-100 text-midnight">experts</span>
            <br />
            in 15 minutes with the Blinkist app.
          </p>
          <GetStartBtn className="w-full sm:max-w-74" />
        </div>
        <div className="relative">
          <video className="md:-top-7 md:left-0 md:w-24 absolute right-0 left-10 w-16 -rotate-3" height="97px" width="80px" autoPlay loop muted playsInline={true}>
            <source src="/videos/ear.mov?c=365" type="video/mp4; codecs='hvc1'" />
            <source src="/videos/ear.webm?c=365" type="video/webm" />
          </video>
          <video className="md:bottom-0 md:right-10 md:w-20 absolute bottom-10 w-12" height="85px" width="85px" autoPlay loop muted playsInline={true}>
            <source src="/videos/stars.mov?c=365" type="video/mp4; codecs='hvc1'" />
            <source src="/videos/stars.webm?c=365" type="video/webm" />
          </video>
          <video className="md:right-18 md:top-16 md:w-18 absolute right-0 bottom-0 w-14" height="75px" width="75px" autoPlay loop muted playsInline={true}>
            <source src="/videos/glasses.mov?c=365" type="video/mp4; codecs='hvc1'" />
            <source src="/videos/glasses.webm?c=365" type="video/webm" />
          </video>
          <picture>
            <source media="(min-width: 768px)" srcSet="/imgs/hero_desktop.png" width="508" height="433" />
            <source srcSet="/imgs/hero_mobile.png" width="300" height="289" />
            <img fetchPriority="high" alt="Blinkist mobile app" src="/imgs/hero_mobile_b.png" loading="eager" decoding="async" width="300" height="289" />
          </picture>
        </div>
      </div>
    </div>
  )
}