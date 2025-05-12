"use client"
import { MenuOutlined, CloseOutlined, LoginOutlined, DownOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { useMemo, useState } from 'react';
import './drawer.css';
import data from '../mockData'


export default function MyDrawer() {
  const [open, setOpen] = useState(false);
  const items = data
  const [cur, setCur] = useState('');
  const curItem = useMemo(() => items.find(item => item.key === cur), [cur, items]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MenuOutlined className='w-6 h-6 m-3 cursor-pointer' style={{ fontSize: '1.5rem' }} onClick={showDrawer} />
      <Drawer
        title={null}
        closeIcon={null}
        placement="left"
        onClose={onClose}
        width='100%'
        open={open}
        rootClassName="my-drawer"
      >
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between'>
            <img src="/imgs/logo.svg" className='h-5 mr-6' alt="blinkist" />
            <CloseOutlined className='w-5 h-5 cursor-pointer' style={{ fontSize: '1.5rem' }} onClick={onClose} />
          </div>
          <div></div>
        </div>

        {cur ? (
          <div className='relative my-2 flex flex-col items-stretch gap-2 px-6 py-2'>
            <div className='inline-flex items-center h-12'>
              <ArrowLeftOutlined className='w-5 h-5 text-black hover:text-blue-500' style={{ fontSize: '1.5rem' }} onClick={() => setCur('')} />
            </div>
            {curItem?.children?.map(item => (
              <div key={item.key} className='flex items-center h-12 truncate cursor-pointer hover:text-blue-700 font-medium text-base'>
                <div className='flex items-center grow gap-2'>
                  <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='relative my-2 flex flex-col items-stretch gap-2'>
            <div className='inline-flex items-center h-12 truncate cursor-pointer hover:text-blue-700 font-medium text-base'><LoginOutlined className='mr-1' />Login</div>
            <div></div>
            <div className='text-caption text-gray-500 h-6 font-bold uppercase'>Categories</div>
            {items.map(item => (
              <div key={item.key} className='flex items-center h-12 truncate cursor-pointer hover:text-blue-700 font-medium text-base' onClick={() => setCur(item.key)}>
                <div className='grow'>{item.label}</div>
                <DownOutlined className='ml-2' />
              </div>
            ))}
            <a href='javascript:void(0)' target="_blank" className='inline-flex items-center h-12 truncate cursor-pointer !text-black hover:!text-blue-700 font-medium text-base'>For Business</a>
          </div>
        )}


      </Drawer>
    </>
  );
}