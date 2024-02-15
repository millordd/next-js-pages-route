import { Card, Grid, Image, Text } from '@mantine/core';
import { NewsArticle } from '@/models/NewsArticles';

interface NewsArticles {
    article:NewsArticle[],
}
const NewsArticleCard = ({ article }:NewsArticles) => {
    const validImgUrl = (urlToImage:string | undefined) => {
        const url = (urlToImage?.startsWith('http://') ||
        urlToImage?.startsWith('https://')) ? urlToImage : undefined;
     return url;
    };

    return (
        <>
            <Grid>
        {
            article.map(({ url, urlToImage, title, description }:NewsArticle) => (

                <Grid.Col span={3}>

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
                         src={validImgUrl(urlToImage)}
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

                </Grid.Col>

            ))
        }
            </Grid>

        </>
    // <div>NewsArticleCard</div>
    );
};

export default NewsArticleCard;
