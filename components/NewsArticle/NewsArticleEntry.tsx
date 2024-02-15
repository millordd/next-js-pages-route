import { Card, Image, Text } from '@mantine/core';
import { NewsArticle } from '@/models/NewsArticles';

interface NewsArticles {
    article:NewsArticle,
}

const NewsArticleEntry = ({ article: { author, content,
    description, publishedAt, title, url, urlToImage } }:NewsArticles) => {
        const validImgUrl = (urlToImage?.startsWith('http://') ||
         urlToImage?.startsWith('https://')) ? urlToImage : undefined;

        return (
            <>
               <Card
                 h={400}
                 w={400}
                 shadow="sm"
                 padding="xl"
                 component="a"
                 href={url}
                 target="_blank"
               >
                    <Card.Section>
                        <Image
                        //   fit=""
                          src={validImgUrl}
                          h={220}
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
