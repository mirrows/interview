import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import RegistorOrLoginModal from '@/components/registorOrLoginModal/registorOrLoginModal';
import { BookData } from '@/types/common';
import type { Metadata } from 'next';
import BookHero from './components/bookHero/bookHero';
import ChaptersPreview from './components/chaptersPreview/chaptersPreview';
import FeaturedTitle from './components/featuredTitle/featuredTitle';
import GoalsSection from './components/goalsSection/goalsSection';
import MoreKnowledge from './components/moreKnowledge/moreKnowledge';
import PeopleAlsoLikeBooks from './components/peopleAlsoLikeBooks/peopleAlsoLikeBooks';
import PeopleBlinkist from './components/peopleBlinkist/peopleBlinkist';
import QaPane from './components/qapane/qapane';
import SimilarBooks from './components/similarBooks/similarBooks';
import TotalDataList from './components/totalDataList/totalDataList';
import TrialExplainer from './components/trialExplainer/trialExplainer';
import mockData from './mockData';

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
  const bookData: BookData = mockData // 示例数据，实际使用时替换为从 API 获取的数据

  return (
    <div className='flex flex-col w-full font-cera-pro'>
      <Header />
      <div className='text-midnight relative'>
        <BookHero data={bookData} />
      </div>
      <ChaptersPreview title={bookData.title} />
      <MoreKnowledge data={bookData} />
      <SimilarBooks data={bookData} />
      <PeopleBlinkist />
      <PeopleAlsoLikeBooks data={bookData} />
      <TotalDataList />
      <GoalsSection data={bookData} />
      <QaPane data={bookData} />
      <TrialExplainer />
      <FeaturedTitle data={bookData} />
      {/* 可继续添加展示书籍详细信息的内容 */}
      <RegistorOrLoginModal />
      <Footer />
    </div>
  );
}