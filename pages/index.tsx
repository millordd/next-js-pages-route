// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { NewsArticle, NewsResponse } from '@/models/NewsArticles';

interface BreakingNewsPageProps {
  newsArticles:NewsArticle[]
}

export const getServerSideProps:GetServerSideProps<BreakingNewsPageProps> = async () => {
 const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
 const newsResponse:NewsResponse = await response.json();
 return { props: { newsArticles: newsResponse.articles } };
};

export default function BreakingNewsPage({ newsArticles }:BreakingNewsPageProps) {
  console.log('next');

  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      <Head>
      <title key="title">Breaking News - Next JS News App</title>
      </Head>

      <main>
        <h1>Breaking News</h1>
        {JSON.stringify(newsArticles)}
      </main>
    </>
  );
}
