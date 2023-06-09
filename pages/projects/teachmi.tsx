// @ts-nocheck
import { Roboto } from 'next/font/google';
import styles from './teachmi.module.css';
import Head from 'next/head';
import Image from 'next/image';
import  { getTeachMiPageBlocks, getTeachMiPageProperties } from '../../components/notion';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
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
          <Grid item xs={12} sm={12} md={7} sx={{alignSelf: 'center'}}> 
            <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
              {projectProperties['Name'].title[0].plain_text}
            </Typography>
            <Grid item xs={12} sm={12} md={12}> 
              <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                {bullets[0]}
              </Typography>
            </Grid>
            <Button variant='contained' sx={{mt: '24px'}}onClick={() => onView(`${projectProperties['Prototype'].url}`)} > View Prototype </Button>
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
        <section className={styles.design} id='design'>
          {/* The Challenge */}
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[1]}
                </Typography>
                <Grid container item spacing={2}> 

                    {bullets.slice(2, 13).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
             
                </Grid>
              </Grid>
            </Grid>
            
          </Container>
       
         {/* Empathize */}
        <Container> 
        <Grid sx={{justifyContent: { xs: "flex-start", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
               <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[2]}
                </Typography>
                <Grid container item spacing={2}> 
                    {bullets.slice(13, 22).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                </Grid>        
              </Grid>
              <Grid item xs={12} sm={12} md={5}> 
              <Image
                      src={imageTwo}
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
      
        {/* Design */}
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[3]}
                </Typography>
              </Grid>
                  <Grid container item spacing={2}> 
                    {bullets.slice(22, 28).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                </Grid>
            </Grid>
          </Container>
      {/* Test */}
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[4]}
                </Typography>
                <Grid container item spacing={2}> 
                  
                      {bullets.slice(28, 34).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                  
                </Grid>
              </Grid>
            </Grid>
          </Container>
       {/* Design System */}
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[5]}
                </Typography>
                <Grid container item spacing={2}> 
                      {bullets.slice(34, 39).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6}> 
              <Image
                      src={imageThree}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                 <Grid item xs={12} sm={12} md={6}> 
                 <Image
                      src={imageFour}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageFive}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                   
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageSix}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageSeven}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageEight}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageNine}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageTen}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid container item spacing={2}> 
                      {bullets.slice(39).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageEleven}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                 <Grid item xs={12} sm={12} md={6}> 
                 <Image
                      src={imageTwelve}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageThirteen}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageFourteen}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageFifteen}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageSixteen}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageSeventeen}
                      alt={'Hero image for movitix projext'}
                      className={`${styles.responsive} "w-full h-auto"`}
                      sizes="100vw"
                      width="0"
                      height="0"
                      quality={100}
                      priority
                      placeholder='blur' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <Image
                      src={imageEighteen}
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
        <section id='results'>
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[6]}
                </Typography>
                <Grid container item spacing={2}> 
                      {bullets.slice(40, 46).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
    </>
  )
}



