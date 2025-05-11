import BookCarousel from "@/components/bookCarousel/bookCarousel";
import { BookData } from "@/types/common";

type Props = {
  data: BookData
};
export default function PeopleAlsoLikeBooks({ data }: Props) {
  const staticData = [...Array(12)].map((_, i) => ({
    ...data,
    bookId: `${data.bookId}-${i}`, // 确保每个 bookId 是唯一的
  }))
  return (
    <div id="people-also-like-books" className="bg-midnight w-full py-12 mb-12 md:mb-16">
      <div className="flex-col  flex w-full max-w-[80rem] mx-auto md:px-12">
        <h2 className="font-bold text-h35 text-white mb-6 md:mb-8 px-4 md:px-0">People also liked these summaries</h2>
        <BookCarousel data={staticData} />
      </div>
    </div>
  )

}