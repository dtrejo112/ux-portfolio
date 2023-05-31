import { Roboto } from 'next/font/google'
import styles from './linkedin.module.css'

import  { getSR1PageBlocks, getSR1PageProperties } from '../notion';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CaseStudyNav from '@/components/navbar/CaseStudyNav';
import PopUp from '@/components/PopUp/PopUp';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export async function getStaticProps() {
  
  const headings: string[] = [];
  const bullets: string[] = [];
  const images: string[] = [];
  
  const projectProperties = await getSR1PageProperties();
  
  const projectPage = await getSR1PageBlocks();

  projectPage.forEach((result) => {
    if(result.type == 'heading_3') {
      headings.push(result.heading_3.rich_text[0].text.content);
    }
     if(result.type == 'bulleted_list_item') {
      bullets.push(result.bulleted_list_item.rich_text[0].text.content);
    }
    if(result.type == 'image') {
      images.push(result.image.file.url);
    }
  })

  return {
    props: {
      projectProperties,
      headings,
      bullets,
      images

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
  images: [string];

}

export default function SR1({ projectProperties, headings, bullets, images }: Props) {
  
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
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
            <PopUp url={images[0]} 
                   altText='image one' 
                   imageStyle={styles.responsive} 
                   modalStyle={styles.imgModal} 
                   xsModal='90%' smModal='90%' 
                   mdModal='45%' />
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
        <section className={styles.design} id='design'>
          {/* The Challenge */}
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[1]}
                </Typography>
                <Grid container item spacing={2}> 

                    {bullets.slice(3, 10).map((bullet, index) => 
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
                    {bullets.slice(10, 14).map((bullet, index) => 
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
      
        {/* Design */}
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[3]}
                </Typography>
              </Grid>
                  <Grid container item spacing={2}> 
                    {bullets.slice(14, 21).map((bullet, index) => 
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
                  
                      {bullets.slice(21, 29).map((bullet, index) => 
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
                      {bullets.slice(29, 32).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6}> 
                  <PopUp url={images[1]} 
                   altText='image one' 
                   imageStyle={styles.responsive} 
                   modalStyle={styles.imgModal} 
                   xsModal='90%' smModal='90%' 
                   mdModal='40%' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <PopUp url={images[2]} 
                   altText='image one' 
                   imageStyle={styles.responsive} 
                   modalStyle={styles.imgModal} 
                   xsModal='90%' smModal='90%' 
                   mdModal='40%' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <PopUp url={images[3]} 
                   altText='image one' 
                   imageStyle={styles.responsive} 
                   modalStyle={styles.imgModal} 
                   xsModal='90%' smModal='90%' 
                   mdModal='40%' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <PopUp url={images[4]} 
                   altText='image one' 
                   imageStyle={styles.responsive} 
                   modalStyle={styles.imgModal} 
                   xsModal='90%' smModal='90%' 
                   mdModal='20%' />
                </Grid>
                <Grid item xs={12} sm={12} md={6}> 
                <PopUp url={images[5]} 
                   altText='image one' 
                   imageStyle={styles.responsive} 
                   modalStyle={styles.imgModal} 
                   xsModal='90%' smModal='90%' 
                   mdModal='40%' />
                </Grid>
            </Grid>
          </Container>
        {/* Code Viz */}
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[6]}
                </Typography>
                <Grid container item spacing={2}> 
                      {bullets.slice(32, 34).map((bullet, index) => 
                        <Grid item xs={12} sm={12} md={12} key={index}> 
                          <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' gutterBottom>
                          {bullet}
                          </Typography>
                        </Grid>  
                      )} 
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6}> 
                <PopUp url={images[6]} 
                   altText='image one' 
                   imageStyle={styles.responsive} 
                   modalStyle={styles.imgModal} 
                   xsModal='90%' smModal='90%' 
                   mdModal='30%'/>
               
                </Grid>
            </Grid>
          </Container>
        </section>

        <section id='results'>
        <Container> 
          <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
              <Grid item xs={12} sm={12} md={8}> 
                <Typography className={`${styles.title} ${roboto.className}`} variant='h2' gutterBottom>
                  {headings[7]}
                </Typography>
                <Grid container item spacing={2}> 
                      {bullets.slice(34, 41).map((bullet, index) => 
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



