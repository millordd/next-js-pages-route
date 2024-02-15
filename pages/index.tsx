// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container } from '@mantine/core';
import { NewsArticle, NewsResponse } from '@/models/NewsArticles';
import NewsArticleEntry from '@/components/NewsArticle/NewsArticleEntry';
import NewsArticleCard from '@/components/NewsArticlesCard/NewsArticleCard';

interface BreakingNewsPageProps {
  newsArticles:NewsArticle[]
}
const API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;

export const getServerSideProps:GetServerSideProps<BreakingNewsPageProps> = async () => {
 const response = await fetch(API);
 const newsResponse:NewsResponse = await response.json();
 return { props: { newsArticles: newsResponse.articles } };
};

export default function BreakingNewsPage({ newsArticles }:BreakingNewsPageProps) {
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      <Head>
      <title key="title">Breaking News - Next JS News App</title>
      </Head>

      <main>
        <h1>Breaking News</h1>
        <Container fluid>
         <NewsArticleCard article={newsArticles} />

        </Container>
      </main>
    </>
  );
}
