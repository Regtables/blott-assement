import Image from "next/image";
import { getNews } from "@/app/lib/actions";
import NewsList from "@/components/NewsList";

export default async function Home() {
  const news = await getNews()

  return (
    <main>
      <NewsList newsData={news} />
    </main>
  );
}
