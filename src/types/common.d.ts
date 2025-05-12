import React from "react"

// 定义书籍数据类型
export interface BookData {
  bookId: string,
  title: string,
  author: string,
  color: string,
  categories: {
    name: string,
    href: string,
    icon: React.ReactNode,
  }[],
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
  about: React.ReactNode,
  review: React.ReactNode,
  bastQuote: string,
  bastQuoteFrom: string,
  aboutAuthor: React.ReactNode,
}