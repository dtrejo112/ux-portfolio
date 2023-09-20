import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Grid, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const onView = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <section id='contact' style={{ padding: '0rem'}}> 
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 4,
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        alignItems: 'center',
       
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: {xs: 'center', md: 'left'}}}>
          {"Copyright © "}
          <Link color="inherit" href="https://github.com/dtrejo112" target="_blank">
            Built By Danny Trejo
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
      <Grid sx={{justifyContent:{xs: 'center', md: 'flex-end'},  mt: '-25px'} } container spacing={4}>
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
    </Box>
    </section>
  );
}