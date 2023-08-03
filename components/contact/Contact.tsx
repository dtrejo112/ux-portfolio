import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid, IconButton} from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './Contact.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

export default function Contact() {
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
        <section id='contact'>
            <Container className={styles.container}>
                <Typography className={`${styles.contactHeader} ${roboto.className}`} sx={{alignSelf:'flex-start'}} variant="h3" gutterBottom>
                   Contact
                </Typography>
                <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6'component={'h4'} sx={{alignSelf:'flex-start'}} noWrap gutterBottom>
                  Let&apos;s connect the socials below are the best way to reach me
                </Typography>
                <Grid sx={{justifyContent:"flex-start"} } container spacing={4}>
                  <Grid item> 
                    <IconButton aria-label="linkedin" size="large"  onClick={() => onView('https://www.linkedin.com/in/daniel-trejo-0x/')}> 
                        <LinkedInIcon color={'primary'}/>
                    </IconButton>
                  </Grid>
                  <Grid item> 
                    <IconButton aria-label="email" size="large"  onClick={() => window.location.href = `mailto:danieltrejo112@gmail.com`}> 
                        <EmailIcon color={'primary'}/>
                    </IconButton>
                  </Grid>
                  </Grid>
            </Container>
        </section>
    </>  
  );
}