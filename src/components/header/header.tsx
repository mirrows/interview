import { Button, Dropdown, Space } from 'antd';
import GetStartBtn from '../getStartBtn/getStartBtn';
import type { MenuProps } from 'antd';
import { DownOutlined, RightOutlined, LoginOutlined, MenuOutlined } from '@ant-design/icons';
import data from './mockData'
import MyDrawer from './myDrawer/drawer';
import Link from 'next/link';

type Props = {
  fixed?: boolean;
}

export default function Header({ fixed = false }: Props) {

  const items: MenuProps['items'] = data.map((item) => ({
    ...item,
    label: (
      <div className='flex items-center h-10 px-2 gap-4 text-sm'>
        <div className='grow'>{item.label}</div>
      </div>
    ),
    children: item.children?.map((child) => ({
      ...child,
      label: (
        <div className='inline-flex items-center h-10 px-2 gap-4 text-sm'>
          {child.label}
        </div>
      )
    })),
  }));


  return (
    <div className={`${fixed ? 'fixed' : ''} top-0 left-0 w-full bg-white border-b border-gray-300 z-40`}>
      <div className="flex items-center m-auto max-w-7xl px-4 md:px-12">
        <div className='flex h-18 w-full items-center gap-4'>
          <div className='lg:hidden'>
            <MyDrawer />
          </div>
          <Link href="/">
            <img src="/imgs/logo.svg" className='h-5 md:h-6 mr-6' alt="blinkist" />
          </Link>
          <Dropdown
            menu={{
              items, expandIcon: (
                <div className='inline-flex items-center h-10'>
                  <RightOutlined />
                </div>
              )
            }}
            trigger={['click']}
            className='max-lg:hidden'
          >
            <div className='flex items-center cursor-pointer'>Category<DownOutlined className='ml-2' /></div>
          </Dropdown>
        </div>
        <div className="flex items-center gap-8">
          <a href="javascript:void(0)" target="_blank" className='truncate cursor-pointer hover:text-blue-700 max-md:hidden'>For Business</a>
          <div className='truncate cursor-pointer hover:text-blue-700 max-md:hidden'><LoginOutlined className='mr-1' />Login</div>
          <GetStartBtn />
        </div>
      </div>
    </div>
  )

}