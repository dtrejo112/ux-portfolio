import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {Button, Container, IconButton, Tooltip } from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './About.module.css';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export default function About() {
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
        <section id='about'> 
            <Container className={styles.container}>
               <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '12px', flexDirection: {xs: 'column', sm: 'row'}}}> 
                <Typography className={`${styles.aboutMe} ${roboto.className}`} variant='h1' noWrap>
                  Hello, I&apos;m Danny.
                </Typography>
                <Tooltip title="Wave" followCursor> 
                  <IconButton>
                      <WavingHandOutlinedIcon className={styles.wave} sx={{color: ' #242424', fontSize: { xs:'48px', sm:'52px', md: '64px'}}}/>
                  </IconButton>
                </Tooltip>
                </Box>
                <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h2'  noWrap>
                  Designing with development in mind.
                </Typography>
                <Button variant='contained' onClick={() => onView('/Daniel_Trejo_Resume.pdf')} > View Resume </Button>
            </Container>
          </section>
    </>  
  );
}