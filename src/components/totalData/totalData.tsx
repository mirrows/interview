type Props = {
  data: any[];
}

export default function TotalData({ data }: Props) {
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          {item.img}
          <span className="mb-2 font-bold">{item.line1}</span>
          <p className="text-p1 text-dark-grey">{item.line2}</p>
        </div>
      ))}
    </>
  )
}