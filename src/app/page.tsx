import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import QaPane from './components/qapane/qapane';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';
import Section6 from './components/section6/section6';

export default function Home() {
  return (
    <div>
      <Header fixed />
      <div className='md:mt-40 md:gap-20 mt-28 flex flex-col gap-16'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <div className='bg-[#d8e9ff] text-midnight flex flex-col py-12 md:px-12 px-4'>
          <h2 className="text-h5 mb-8 text-center font-bold">Trusted by the world's leading brands</h2>
          <picture>
            <source media="(min-width: 768px)" srcSet="/imgs/brands.png" width="1110" height="29" />
            <source srcSet="/imgs/brands-mobile.png" width="335" height="125" />
            <img fetchPriority="auto" alt="brands" src="/imgs/brands.png" className="mx-auto" loading="lazy" decoding="async" width="335" height="125" />
          </picture>
        </div>
        <Section6 />
        <QaPane />
        <Footer />
      </div>
    </div>
  );
}
