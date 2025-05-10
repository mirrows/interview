
// 定义书籍数据类型
export interface BookData {
  bookId: string,
  title: string,
  author: string,
  color: string,
  audio: string,
  pic: string,
  desc: string,
  summary: string,
  commentCount: number,
  star: number,
  time: string,
  href: string,
  topics: string[],
  recommendBooks: Partial<BookData>[]
}