type Props = {
  data: any;
}
export default function CarouselItem({ data }: Props) {
  return (
    <div className={`${data.bg} md:grid-cols-2 md:gap-8 md:rounded-[40px] md:py-12 md:pl-12 md:pr-6 grid snap-start items-center gap-4 rounded-[20px] px-6 py-6`}>
      <div>
        <h3 className="text font-tisa-pro text-h3 text-midnight md:text-h15 mb-4">
          <span className="font-bold text-blue">{data.title}</span> {data.extra}
        </h3>
        <p className="text-p1 text-dark-grey md:text-p0">{data.content}</p>
      </div>
      <div className="flex flex-col items-center">
        <img alt="A screen shot of the Blinkist app open at a blink" src={data.pic} className="w-fit h-full object-contain" loading="lazy" decoding="async" width="280" height="280" />
      </div>
    </div>
  )
}