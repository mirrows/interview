import { bookData } from "@/components/footer/mockData";
import { BookData } from "@/types/common";
import Link from "next/link";

type Props = {
  data: BookData;
}


export default function FeaturedTitle({ data }: Props) {
  const linkData = bookData.map(data => ({
    title: data.title,
    items: data.items.map(item => ({
      name: item,
      href: `/book/${item.toLocaleLowerCase().replaceAll(' ', '-').replace(/[^a-zA-Z0-9-]/g, '')}-en`,
    }))
  }))
  return (
    <div className="w-full flex-col mb-12">
      <div className=" flex w-full max-w-[80rem] mx-auto md:px-12 px-4 ">
        <h2 className="mb-6 text-midnight font-bold text-h35">
          Featured Titles
        </h2>
      </div>
      <div className="flex-col gap-5  flex w-full max-w-[80rem] mx-auto md:px-12  ">
        <div className="w-full overflow-hidden">
          <div className=" pb-8 -mb-8 overflow-x-auto overflow-y-hidden flex">
            {linkData.slice(3).map((data, i) => (
              <ul key={i} className="w-64 lg:w-full mr-8 ml-4 md:mr-12 md:ml-0 lg:mr-0 lg:pr-12 last:mr-4 last:md:mr-0 flex-shrink-0 lg:flex-shrink">
                {data.items.map((item, j) => (
                  <li key={j} className="mb-4 text-grey-500 font-normal text-sm hover:text-blue-500">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}