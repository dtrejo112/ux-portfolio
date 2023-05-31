import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Button, Card, CardActionArea, CardActions, CardContent, Chip, Container, Grid, IconButton, Paper, Stack, Toolbar } from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './Contact.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import router from 'next/router';
import CopyButton from '../Copy/CopyButton';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});

const socials = [ 
  {
      'icon': 'LinkedInIcon',
      'title' : 'LinkedIn',
      'handle': 'https://www.linkedin.com/in/daniel-trejo-0x/',     
      'buttonText': 'View LinkedIn'                
  },
  {
    'icon': 'EmailIcon',
    'title' : 'Email',
    'handle': 'danieltrejo112@gmail.com', 
    'buttonText': 'Send Email'                    
  },
  {
    'icon': 'SmartPhoneIcon',
    'title' : 'Phone',
    'handle': '424-393-8111',                     
  },

];

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
                <Typography className={`${styles.subTitle} ${roboto.className}`} variant='h6' sx={{alignSelf:'flex-start'}} noWrap gutterBottom>
                  Let's connect the socials below are the best way to reach me
                </Typography>
                <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {socials.slice(0,2).map((social, index) => (
                  <Grid item xs={12} sm={12} md={6} key={index}>
                    <Box key={social.title} sx={{ minWidth: 300, maxWidth: 500}}>
                      <Card variant="outlined"> 
                      {/* <CardActionArea onClick={social.title == 'Email' ? () => window.location.href = `mailto:${social.handle}` : () => onView('https://www.linkedin.com/in/daniel-trejo-0x/')} >  */}
                            <CardContent>
                              <Stack direction='column' spacing={1}> 
                                <Stack direction='row' spacing={1} alignItems="center"> 
                                  {social.icon == 'LinkedInIcon' ? <LinkedInIcon /> : <EmailIcon />}
                                  <Typography className={`${styles.textColor} ${roboto.className}`} sx={{ fontSize: 14 }} gutterBottom>
                                  {social.title}
                                  </Typography>
                                </Stack> 
                                <Stack direction='row' spacing={1} alignItems="center"> 
                                  <AlternateEmailIcon />
                                  <Typography className={`${styles.textColor} ${roboto.className}`} sx={{ fontSize: 14 }} noWrap gutterBottom>
                                  {social.handle}
                                  </Typography>
                                </Stack> 
                              </Stack>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' 
                                       size="medium" 
                                       onClick={social.title == 'Email' ? () => window.location.href = `mailto:${social.handle}` : () => onView('https://www.linkedin.com/in/daniel-trejo-0x/')}> 
                                       {social.buttonText} </Button>
                                <CopyButton textToCopy={social.handle} />
                            </CardActions>
                            {/* </CardActionArea> */}
                      </Card>
                    </Box>
                  </Grid>
                  ))}
                  {socials.slice(2,3).map((social, index) => (
                  <Grid item xs={12} sm={12} md={6} key={index}>
                    <Box key={social.title} sx={{ minWidth: 300, maxWidth: 500}}>
                      <Card variant="outlined"> 
                      {/* <CardActionArea>  */}
                            <CardContent>
                              <Stack direction='column' spacing={1}> 
                                <Stack direction='row' spacing={1} alignItems="center"> 
                                  <SmartphoneIcon />
                                  <Typography className={`${styles.textColor} ${roboto.className}`} sx={{ fontSize: 14 }} gutterBottom>
                                  {social.title}
                                  </Typography>
                                </Stack> 
                                <Stack direction='row' spacing={1} alignItems="center"> 
                                  <AlternateEmailIcon />
                                  <Typography className={`${styles.textColor} ${roboto.className}`} sx={{ fontSize: 14 }} gutterBottom>
                                  {social.handle}
                                  </Typography>
                                </Stack> 
                              </Stack>
                            </CardContent>
                            <CardActions>
                                <CopyButton textToCopy={social.handle} />
                            </CardActions>
                            {/* </CardActionArea> */}
                      </Card>
                    </Box>
                  </Grid>
                  ))}
                  </Grid>
            </Container>
        </section>
    </>  
  );
}