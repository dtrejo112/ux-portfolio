// @ts-nocheck
import { Roboto } from 'next/font/google';
import styles from './teachmi.module.css';
import Head from 'next/head';
import Image from 'next/image';
import  { getTeachMiPageBlocks, getTeachMiPageProperties } from '../../components/notion';
import { Box, Button, Container, Grid, Typography, Stack } from '@mui/material';
import CaseStudyNav from '@/components/navbar/CaseStudyNav';

import imageOne from '../../public/teachmiimages/teachmiimage-1.png';
import imageTwo from '../../public/teachmiimages/teachmiimage-2.png';
import imageThree from '../../public/teachmiimages/teachmiimage-3.png';
import imageFour from '../../public/teachmiimages/teachmiimage-4.png';
import imageFive from '../../public/teachmiimages/teachmiimage-5.png';
import imageSix from '../../public/teachmiimages/teachmiimage-6.png';
import imageSeven from '../../public/teachmiimages/teachmiimage-7.png';
import imageEight from '../../public/teachmiimages/teachmiimage-8.png';
import imageNine from '../../public/teachmiimages/teachmiimage-9.png';
import imageTen from '../../public/teachmiimages/teachmiimage-10.png';
import imageEleven from '../../public/teachmiimages/teachmiimage-11.png';
import imageTwelve from '../../public/teachmiimages/teachmiimage-12.png';
import imageThirteen from '../../public/teachmiimages/teachmiimage-13.png';
import imageFourteen from '../../public/teachmiimages/teachmiimage-14.png';
import imageFifteen from '../../public/teachmiimages/teachmiimage-15.png';
import imageSixteen from '../../public/teachmiimages/teachmiimage-16.png';
import imageSeventeen from '../../public/teachmiimages/teachmiimage-17.png';
import imageEighteen from '../../public/teachmiimages/teachmiimage-18.png';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export async function getStaticProps() {
  
  const headings: string[] = [];
  const bullets: string[] = [];
  
  const projectProperties = await getTeachMiPageProperties();
  
  const projectPage = await getTeachMiPageBlocks();

  projectPage.forEach((result) => {
    if(result.type == 'heading_3') {
      headings.push(result.heading_3.rich_text[0].text.content);
    }
     if(result.type == 'bulleted_list_item') {
      bullets.push(result.bulleted_list_item.rich_text[0].text.content);
    }
  })

  return {
    props: {
      projectProperties,
      headings,
      bullets,
    },
  };
}

interface ProjectProperties {
  id: string;
  properties: [any];
}
interface Props {
  projectProperties: ProjectProperties[];
  headings: [string];
  bullets: [string];


}

export default function TeachMi({ projectProperties, headings, bullets }: Props) {
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
         <Head>
          <title> TeachMi </title>
          <meta name="description" content="A case study for a EdTech application" />
        </Head>
        <CaseStudyNav />
        <section>
        <Container> 
        <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
          <Grid item xs={12} sm={12} md={7} sx={{alignSelf: 'flex-start'}}> 
            <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
              {projectProperties['Name'].title[0].plain_text}
            </Typography>
            <Grid item xs={12} sm={12} md={12}> 
              <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                {bullets[0]}
              </Typography>
            </Grid>
            <Stack direction={{ xs: 'column', sm: 'row'}} sx={{paddingTop: '24px', paddingBottom: '24px'}} spacing={{ xs: 1, sm: 2, md: 2 }}>  
                   <Box>  
                  <Button variant='contained' 
                          onClick={() => onView(`${projectProperties['Prototype'].url}`)}
                          size="large"
                  > 
                     View Prototype
                  </Button>
                  </Box>
                  <Box>
                  <Button 
                      variant='outlined' 
                      onClick={() => 
                         onView('https://docs.google.com/presentation/d/e/2PACX-1vS_G46GWVkUXW-4G6sMjdL6AvS2YHlqvU5CZ4OHd0ccDuaBx6A2G4XtLc4LEF4bdx8o9eEudnAr-o6O/pub?start=false&loop=false&delayms=3000')} 
                      size='large'
                    
                  > 
                      View Case Study Slides
                  </Button>
                  </Box>
                </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={5}> 
          <Image
                      src={imageOne}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
          </Grid>
          </Grid>
          </Container>
        </section>

        <section id='summary'>
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[0]}
                </Typography>
                <Grid container item spacing={2}> 
                  <Grid item xs={12} sm={12} md={12}> 
                  <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                      <Box component="span" fontWeight="bold">  Role: </Box> {projectProperties['Role'].rich_text[0].text.content}
                    </Typography>
                    <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                        <Box component="span" fontWeight="bold">  Company: </Box> {projectProperties['Company'].rich_text[0].text.content}
                    </Typography>
                    <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                        <Box component="span" fontWeight="bold">  Project Timeline: </Box> 
                        {projectProperties['Project Timeline'].date.start} {'->'} {projectProperties['Project Timeline'].date.end}
                    </Typography>
                    </Grid>

                    <Grid container item spacing={2}> 
                    {bullets.slice(1, 2).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
    </>
  )
}



