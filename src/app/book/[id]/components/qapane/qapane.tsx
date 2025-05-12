import MyCollapse from "@/components/myCollapse/myCollapse";
import { BookData } from "@/types/common";

type Props = {
  data: BookData
}

export default function QaPane({ data }: Props) {
  const items = [
    {
      title: 'What can Blinkist do for me?',
      content: <>Blinkist is here to help you learn faster and smarter. It offers summaries from thousands of bestselling non-fiction books to read or listen to in just 15 minutes. Whether you want to acquire new knowledge or fill up your waiting times with insightful information, Blinkist is your perfect learning companion.</>,
    },
    {
      title: 'How can I use Blinkist?',
      content: <>You can access Blinkist on most devices. Either download our Blinkist app on your smartphone, available on both iOS and Android devices, or use it on any desktop computer through our website. For on-the-go convenience, listen to our audio versions while commuting, during your workouts, or while doing household chores.You also have the option to read or listen offline by downloading the content. To make your journeys even more enlightening, you can use Blinkist through CarPlay and Android Auto while you're driving.</>,
    },
    {
      title: 'What types of books does Blinkist cover? How many are there?',
      content: <>There are currently over 7,500 books in the Blinkist library and we constantly add more titles to our collection. From the latest releases to timeless classics, Blinkist's library spans a diverse range of topics, including but not limited to business, personal development, parenting, science, philosophy, psychology, politics, and culture. Our goal is to provide key insights from globally acclaimed and impactful non-fiction books. Whether you want to dive deep into a specific subject or explore various topics, you'll find the right content that suits your needs and interests.</>,
    },
    {
      title: "What’s included in a plan?",
      content: <>With the Basic plan, you can only access one pre-selected book per day. The Premium plan gives you unlimited access to our entire library of 7,500+ books, podcasts, and expert-led guides. The Premium plan enables you to read or listen offline, save and organize your content, and get personalized recommendations to suit your interests. On top of that, all Premium members get a second Premium account for free to share with someone of their choice!</>,
    },
    {
      title: "What makes Blinkist book summaries the best on the market?",
      content: <>Blinkist book summaries stand out for their commitment to quality. We work with experts, writers, and editors who collaborate with the original authors whenever possible to ensure that the summaries contain the essential insights and preserve the spirit of the entire book. Besides, Blinkist provides an audio version for each summary, giving you the flexibility to learn however you want.</>,
    },
  ]
  return (
    <div className="bg-[#f8faf9]">
      <div className="py-12  md:py-16 px-4  md:px-0  md:max-w-2xl  md:mx-auto text-midnight" id="faqs-section">
        <h2 className="flex flex-col text-center mb-8  md:mb-4 font-bold text-h3  md:text-h2"><span>{data.title}</span> FAQs </h2>
        <MyCollapse data={items} />
      </div>
    </div>
  )

}