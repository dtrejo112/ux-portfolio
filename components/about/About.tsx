import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {Button, Container, IconButton, Stack, Tooltip } from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './About.module.css';
import LinkedIn from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
              <Box>
                <Box className={styles.titleContainer}>
                  <Typography className={`${styles.title} ${roboto.className}`} variant='h1'>
                    Designing With Development in Mind.
                  </Typography>
                </Box>
                <Box className={styles.subTitleContainer}>
                  <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h2'>
                  Creating Intuitive Experiences For Companies of Any Size, {"\n"} 
                  Bridging the Gap Between Design and Development.
                  </Typography>
                </Box>
                </Box> 
                <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 2 }}>  
                  <Button variant='contained' 
                          onClick={() => onView('https://www.linkedin.com/in/daniel-trejo-0x/')} 
                          size="large"
                          endIcon={<EmailIcon />}
                          
                  > 
                      Email Me 
                  </Button>
                  <Button 
                      variant='outlined' 
                      onClick={() => onView('https://www.linkedin.com/in/daniel-trejo-0x/')} 
                      size='large'
                      endIcon={<LinkedIn />}
                  > 
                      Let&apos;s Connect 
                  </Button>
                </Stack>
                
            </Container>
          </section>
    </>  
  );
}