import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Avatar, Button, Container, IconButton, Link, Paper, Stack, Toolbar } from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './NavBar.module.css'
import DrawSharpIcon from '@mui/icons-material/DrawSharp';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';


const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
export default function TopNavigationBar({props} : any) {
  return (
  
        <AppBar color='default' elevation={1} sx={{padding: '0rem 1.5rem 0rem 1.5rem'}}>
        <Toolbar disableGutters sx={{justifyContent: {xs: 'center'}}}>
    
          <Stack direction='row' spacing={2} alignItems='center'>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
      >
    
            <Avatar alt="Danny Trejo" src='../../danny.jpeg' sx={{ width: 48, height: 48 }}/>
            </StyledBadge>
            <Typography className={`${roboto.className}`} variant="h6" component="a" href="/">
                Danny Trejo
            </Typography>
            <Typography className={`${roboto.className}`} variant="body1" component="a" sx={{ flexGrow: 1, fontWeight: '400', display: { xs: 'none', md: 'block'} }} href="/">
                Chicago, IL
            </Typography>
          </Stack>
         
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