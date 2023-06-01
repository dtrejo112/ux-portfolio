import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Button, Container, Icon, IconButton, Paper, Toolbar, Tooltip } from '@mui/material';
import { Roboto } from 'next/font/google';
import router from 'next/router';
import styles from './About.module.css';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import { useState } from 'react';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export default function About({props}: any) {
  const [hello, setHello] = useState(0);
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
        <section id='about'> 
            <Container className={styles.container}>
               <Box sx={{display: 'flex', alignItems: 'center', gap: '8px', flexDirection: 'row'}}> 
                <Typography className={`${styles.aboutMe} ${roboto.className}`} variant='h2' noWrap gutterBottom>
                  Hey, I&apos;m Danny.
                </Typography>
                <Tooltip title="Wave" followCursor> 
                  <IconButton>
                      <WavingHandOutlinedIcon className={styles.wave} sx={{color: ' #242424', fontSize: { xs:'48px', sm:'52px', md: '64px'}}}/>
                  </IconButton>
                </Tooltip>
                </Box>
                <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6'  noWrap gutterBottom>
                  I&apos;m a Designer and Front-End Developer based in Chicago. {"\n"} 
                  Designing with development in mind.
                </Typography>
                <Button variant='contained' onClick={() => onView('/Danny_Trejo_Resume.pdf')} > View Resume </Button>
            </Container>
          </section>
    </>  
  );
}