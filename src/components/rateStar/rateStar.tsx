import { useMemo } from "react";

type Props = {
  size?: string | number;
  color?: string;
  value?: number; // 0-5
}

export default function RateStar({ size = '4', color = "#fdbe21", value = 5 }: Props) {
  const starAreaArr = useMemo(() => {
    const res = Array(5).fill(0);
    let cur = value;
    return res.map((_, i) => {
      if (1 <= cur) {
        cur -= 1;
        return '100%';
      } else {
        const rate = Math.floor(cur * 100);
        cur = 0;
        return `${rate}%`;
      }
    });
  }, [value])
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div key={i}>
          <div className={`relative w-${size} h-${size}`}>
            <div className={`"absolute  w-${size} h-${size}`} style={{
              clipPath: 'polygon(50% .5%,65.1% 33.3%,99.3% 38.5%,74.5% 63.7%,80.4% 99%,50% 82.5%,19.5% 99%,25.5% 63.7%,.5% 38.5%,35% 33.3%)'
            }}>
              <div className="h-full" style={{ width: starAreaArr[i], backgroundColor: color }}></div>
            </div>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0"><path fillRule="evenodd" clipRule="evenodd" d="M6.2064 6.17467L2.07483 6.80601L5.06828 9.87398L4.37426 14.1285L7.99999 12.1243L11.6259 14.1286L10.9319 9.87398L13.9253 6.80603L9.7936 6.17467L8 2.35348L6.2064 6.17467ZM5.52788 5.26675L0 6.11145L4.00007 10.2111L3.05577 16L8 13.2669L12.9444 16L12.0001 10.2111L16 6.11163L10.4721 5.26675L8 0L5.52788 5.26675Z" fill={color}></path></svg>
          </div>
        </div>
      ))}
    </>
  )
}
