import { BookData } from "@/types/common";
import { ChromeOutlined } from '@ant-design/icons';

const bookData: BookData = {
  bookId: 'sample-book-title-en',
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
  ],
  categories: [
    {
      icon: <ChromeOutlined />, // 示例数据，实际使用时替换为从 API 获取的数据
      name: 'Category 1',
      href: '/',
    },
    {
      icon: <ChromeOutlined />, // 示例数据，实际使用时替换为从 API 获取的数据
      name: 'Category 2',
      href: '/',
    }
  ],
  bastQuote: '5am is the time of least distraction, highest human glory and greatest peace.',
  bastQuoteFrom: 'William Shakespeare',
  aboutAuthor: <p>Robin Sharma is one of the world’s top leadership gurus and the best-selling author of <em>The Monk Who Sold His Ferrari</em>. He has helped millions of people to become better leaders, improve their productivity, and lead better lives.</p>,
  about: <><em>The 5 AM Club</em> (2018) shows how embracing a revolutionary morning routine can deliver epic results. Through the enchanting story of an entrepreneur, an artist, and their eccentric billionaire mentor, it explains how you can use the first hour of your day to drive personal growth and get the most out of life.</>,
  review: (
    <>
      <p><em>The 5 AM Club</em> (2018) by Robin Sharma is a compelling book that offers valuable insights on how waking up early can transform our lives. Here's why this book is worth reading:        </p>
      <ul>
        <li>
          <div>It provides <strong>practical strategies</strong> to help us reclaim our mornings and maximize our productivity.</div>
        </li>
        <li>
          <div>
            <strong>Combining personal anecdotes, scientific research</strong>, and fictional storytelling, the book presents its ideas in an engaging and relatable way.</div>
        </li>
        <li>
          <div>By emphasizing the importance of a morning routine and offering actionable steps, the book keeps readers engaged and motivated, ensuring that it is definitely not boring.</div>
        </li>
      </ul>
    </>
  )
}

export default bookData;