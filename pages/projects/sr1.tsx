// @ts-nocheck
import { Roboto } from 'next/font/google';
import styles from './sr1.module.css';
import Head from 'next/head';
import Image from 'next/image';
import  { getSR1PageBlocks, getSR1PageProperties } from '../../components/notion';
import { Box, Button, Container, Grid, Typography, Stack } from '@mui/material';
import CaseStudyNav from '@/components/navbar/CaseStudyNav';
import imageOne from '../../public/sr1images/sr1image-1.png';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export async function getStaticProps() {
  
  const headings: string[] = [];
  const bullets: string[] = [];
  
  const projectProperties = await getSR1PageProperties();
  
  const projectPage = await getSR1PageBlocks();

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

export default function SR1({ projectProperties, headings, bullets}: Props) {
  
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>   
         <Head>
          <title> SR1 </title>
          <meta name="description" content="A case study for a music royalties application" />
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
                         onView('https://docs.google.com/presentation/d/e/2PACX-1vRT-iWRl5Y5HVoYq-YRo_vAgBiRUwcAvi24DyHnYafziKvw4jCv5hXsp5xT4hyz1urC1DVgFnMVrs_Z/pub?start=false&loop=false&delayms=3000')} 
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
                       />
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
                    {bullets.slice(0, 3).map((bullet, index) => 
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



