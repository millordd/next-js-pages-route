import { Card, Image, Text } from '@mantine/core';
import { NewsArticle } from '@/models/NewsArticles';

interface NewsArticleNewsArticle {
    article:NewsArticle,
}

const NewsArticleEntry = ({ article: { author, content,
    description, publishedAt, title, url, urlToImage } }:NewsArticleNewsArticle) => {
        const validImgUrl = (urlToImage?.startsWith('http://') ||
         urlToImage?.startsWith('https://')) ? urlToImage : undefined;

        return (
            <>
               <Card
                 shadow="sm"
                 padding="xl"
                 component="a"
                 href={url}
                 target="_blank"
                //  styles={}
               >
                    <Card.Section>
                        <Image
                          src={validImgUrl}
                          h={160}
                          alt="No way!"
                        />
                    </Card.Section>

                    <Text fw={500} size="lg" mt="md">
                           {title}
                    </Text>

                    <Text mt="xs" c="dimmed" size="sm">
                       {description}
                    </Text>
               </Card>
            </>

        );
    };

export default NewsArticleEntry;
