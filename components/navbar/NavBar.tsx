import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Button, Container, IconButton, Link, Paper, Toolbar } from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './NavBar.module.css'
import DrawSharpIcon from '@mui/icons-material/DrawSharp';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});
export default function TopNavigationBar({props} : any) {
  return (
  
      <AppBar color='default' elevation={1} sx={{padding: '0rem 6rem 0rem 6rem'}}>
        <Toolbar disableGutters>
          <DrawSharpIcon fontSize='large' sx={{ display: 'flex', mr: 1 }} />
          <Typography className={`${roboto.className}`} variant="h6" component="a" sx={{ flexGrow: 1, fontWeight: '700' }} href="/">
              Danny&apos;s Portfolio
          </Typography>
         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Link href='#about' style={{textDecoration: 'none'}}> 
                <Button
                  className={`${styles.navBtn} ${roboto.className}`}
                >
                  Home
                </Button>
              </Link>
              <Link href='#portfolio' style={{textDecoration: 'none'}}> 
                <Button
                  className={`${styles.navBtn} ${roboto.className}`}
                >
                  Portfolio
                </Button>
              </Link>
              <Link href='#skills' style={{textDecoration: 'none'}}> 
                <Button
                  className={`${styles.navBtn} ${roboto.className}`}
                >
                  Skills
                </Button>
              </Link>
              <Link href='#contact' style={{textDecoration: 'none'}}> 
              <Button
                className={`${styles.navBtn} ${roboto.className}`}
              >
                Contact
              </Button>
              </Link>
          </Box>

        </Toolbar>

      </AppBar>
   
  );
}