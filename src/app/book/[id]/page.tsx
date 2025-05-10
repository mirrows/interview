import Header from '@/components/header/header';
import { BookData } from '@/types/common';
import type { Metadata } from 'next';
import BookHero from './components/bookHero/bookHero';

// 定义 Props 类型
interface Props {
  params: {
    id: string;
  };
}


// 异步函数，用于获取书籍数据
// async function fetchBookData(id: string): Promise<BookData> {
//   // 请将此处替换为实际的 API 请求地址
//   const response = await fetch(`https://your-api-url.com/books/${id}`, {
//     cache: 'no-store', // 确保每次请求都获取最新数据，适用于实时性要求高的场景
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch book data');
//   }

//   return response.json();
// }

// 页面组件
export default async function BookPage({ params }: Props) {
  const { id } = params;
  // const bookData = await fetchBookData(id);
  const bookData: BookData = {
    bookId: id,
    title: 'Sample Book Title', // 示例数据，实际使用时替换为从 API 获取的数据
    author: 'Sample Author',
    href: '/books/sample-book-title-en',
    color: '#feceb4', // 示例数据，实际使用时替换为从 API 获取的数据
    audio: 'https://static.blinkist.com/content-pages/homepage/audio/atomic-habits-en.m4a', // 示例数据，实际使用时替换为从 API 获取的数据
    pic: 'https://images.blinkist.io/cdn-cgi/image/width=232,height=232,format=webp,quality=,dpr=1/https://images.blinkist.io/images/books/512750e7e4b0714805cbbe9d/1_1/1080.jpg?c=365',
    desc: 'Sample book description.',
    summary: 'The 5 AM Club by Robin Sharma is a self-help book that highlights the importance of waking up early to increase productivity and creativity. The author provides a framework for creating a morning routine that promotes personal growth and success.',
    commentCount: 23410, // 示例数据，实际使用时替换为从 API 获取的数据
    star: 4.5, // 示例数据，实际使用时替换为从 API 获取的数据
    time: '22mins',
    topics: ['Success', 'Productivity', 'Self-Help'], // 示例数据，实际使用时替换为从 API 获取的数据
    recommendBooks: [
      {
        bookId: '12345', // 示例数据，实际使用时替换为从 API 获取的数据
        title: 'Book Title 1',
        author: 'Author 1',
        href: '/books/book-title-1-en', // 示例数据，实际使用时替换为从 API 获取的数据
      },
    ]
  }; // 示例数据，实际使用时替换为从 API 获取的数据

  return (
    <div className='flex flex-col w-full font-cera-pro'>
      <Header />
      <div className='text-midnight relative'>
        <BookHero data={bookData} />
      </div>

      <h1>当前书籍 ID: {bookData.bookId}</h1>
      {bookData.title && <p>书名: {bookData.title}</p>}
      {bookData.author && <p>作者: {bookData.author}</p>}
      {/* 可继续添加展示书籍详细信息的内容 */}
    </div>
  );
}