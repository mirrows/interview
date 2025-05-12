import { Button } from 'antd';
import Link from 'next/link';

type Props = {
  href?: string;
  className?: string;
  content?: string | React.ReactNode;
}

export default function GetStartBtn({ href = '/', className, content = 'Get started' }: Props) {
  return (
    <Link className={className} href={href}>
      <Button
        type="primary"
        className={`font-custom !h-11 rounded-md cursor-pointer !font-medium w-full`}
        style={{ color: "#043349" }}
      >
        {content}
      </Button>
    </Link>
  )

}