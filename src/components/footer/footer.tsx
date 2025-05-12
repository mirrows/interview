import Link from "next/link"
import { anotherData, bookData } from "./mockData"

export default function Footer() {
  const linkData = bookData.map(data => ({
    title: data.title,
    items: data.items.map(item => ({
      name: item,
      href: `/book/${item.toLocaleLowerCase().replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '')}-en`,
    }))
  }))
  const anotherLinkData = anotherData.map(data => ({
    title: data.title,
    items: data.items.map(item => ({
      name: item,
      href: `/book/${item.toLocaleLowerCase().replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '')}-en`,
    }))
  }))
  const icons = [
    { name: 'facebook', link: 'https://www.facebook.com/blinkist' },
    { name: 'twitter-x', link: 'https://twitter.com/blinkist' },
    { name: 'linkedin', link: 'https://www.linkedin.cn/incareer/home' },
    { name: 'instagram', link: 'https://www.instagram.com/blinkist/' },
  ]
  return (
    <div className="bg-[#eff5f3] md:py-16 w-full py-12">
      <div className="md:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 gap-6">
        <div className="test w-full overflow-hidden">
          <div className="md:gap-16 lg:gap-32 -mb-8 flex gap-8 overflow-x-auto overflow-y-hidden pb-8">
            {linkData.slice(0, 3).map((data, i) => (
              <div key={i} className="w-64 shrink-0">
                <h4 className="text-h5 md:text-h4 text-content-primary font-bold mb-2">{data.title}</h4>
                {data.items.map((item, j) => (
                  <Link key={j} href={item.href} className="text-dark-grey hover:text-blue-500 block text-sm leading-9 font-normal">{item.name}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="test w-full overflow-hidden">
          <div className="md:gap-16 lg:gap-32 -mb-8 flex gap-8 overflow-x-auto overflow-y-hidden pb-8">
            {linkData.slice(3).map((data, i) => (
              <div key={i} className="w-64 shrink-0">
                <h4 className="text-h5 md:text-h4 text-content-primary font-bold mb-2">{data.title}</h4>
                {data.items.map((item, j) => (
                  <Link key={j} href={item.href} className="text-dark-grey hover:text-blue-500 block text-sm leading-9 font-normal">{item.name}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-interface/border shrink-0 h-[1px] w-full"></div>
      </div>
      <div className="md:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 md:flex-row justify-between gap-6">
        <div className="flex flex-col justify-between">
          <div>
            <a href="/" aria-label="Back to homepage" className="flex items-center pb-4">
              <img src="/imgs/logo.svg" className='h-5 md:h-6 mr-6' alt="blinkist" />
            </a>
            <h2 className="text-h4 text-blue-500 mb-8 font-bold">Powerful ideas—<br />15 minutes at a time</h2>
          </div>
          <div className="flex gap-4">
            <a className="js-adjust-link" href="https://app.adjust.com/if9zu1h_7zd16dg">
              <picture>
                <source srcSet="/imgs/footer/apple-app-store-badge.png?" width="133" height="38" />
                <img fetchPriority="auto" alt="Apple App Store Icon" src="/imgs/footer/apple-app-store-badge.png" loading="lazy" decoding="async" width="133" height="38" />
              </picture>
            </a>
            <a className="js-adjust-link" href="https://app.adjust.com/if9zu1h_7zd16dg">
              <picture>
                <source srcSet="/imgs/footer/google-play-store-badge.png" width="133" height="38" />
                <img fetchPriority="auto" alt="Google Play Store Icon" src="/imgs/footer/google-play-store-badge.png" loading="lazy" decoding="async" width="133" height="38" />
              </picture>
            </a>
          </div>
        </div>
        <div className="md:w-3/6 md:flex-row flex flex-col flex-wrap justify-between gap-6">
          {anotherLinkData.map((data, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="bg-interface/border shrink-0 h-[1px] w-full md:hidden"></div>
              <div>
                <h5 className="text-h6 text-content-primary md:text-h5 font-bold md:mb-1 leading-9">{data.title}</h5>
                {data.items.map((item, j) => (
                  <Link key={j} href={item.href} className="text-dark-grey hover:text-blue-500 block text-sm leading-9 font-normal">{item.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:px-12 mx-auto flex max-w-7xl flex-col px-4 py-4 md:flex-row-reverse md:items-end flex-wrap justify-between gap-6">
        <ul className="flex gap-2">
          {icons.map(icon => (
            <li key={icon.name}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <picture>
                  <source srcSet={`/imgs/footer/${icon.name}.png`} width="24" height="24" />
                  <img fetchPriority="auto" alt="Twitter Logo" src={`/imgs/footer/${icon.name}.png`} loading="lazy" decoding="async" width="24" height="24" />
                </picture>
              </a>
            </li>
          ))}
        </ul>
        <ul className="text-dark-grey flex flex-wrap text-sm">
          <li className="hover:text-blue-900">
            © Blinkist {new Date().getFullYear()}
            <span className="mx-2 inline-block">|</span>
          </li>
          <li>
            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">Sitemap</a>
            <span className="mx-2 inline-block">|</span>
          </li>
          <li>
            <a href="/en/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">Legal Notice</a>
            <span className="mx-2 inline-block">|</span>
          </li>
          <li>
            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">Terms of Service</a>
            <span className="mx-2 inline-block">|</span>
          </li>
          <li>
            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">Privacy Policy</a>
            <span className="mx-2 inline-block">|</span>
          </li>
          <li>
            <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">Cookie Consent</a>
          </li>
        </ul>
      </div>
    </div >
  )
}