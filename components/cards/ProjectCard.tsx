import styles from './ProjectCard.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardMedia, Chip, Container, Grid, Stack } from '@mui/material';
import { CardActionArea } from '@mui/material';

import { Roboto } from 'next/font/google';
import router from 'next/router';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';
 
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

interface Project {
  id: string;
  properties: [any];
}
interface Props {
  projects: Project[];
}

const projectLinks = [ 
  {
      'page': 'linkedin',
      'key' : 'linkedin',                    
  },
  {
    'page': 'empowerlink',
    'key' : 'empowerlink',                    
},
{
  'page': 'movitix',
  'key' : 'movitix',                    
},
{
  'page': 'sr1',
  'key' : 'sr1',                    
},
{
  'page': 'teachmi',
  'key' : 'teachmi',                    
},
] 
export default function ProjectCard({ projects }: Props) {
  return (
    <>
    <section id='portfolio'> 
      <Container className={styles.container}> 
        <Typography className={`${styles.textColor} ${roboto.className}`} sx={{alignSelf:'flex-start'}} variant="h4" gutterBottom>
                  Case Studies
        </Typography>
      <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {projects.slice(3,4).map((project, index) => (
       <Grid item xs={12} sm={12} md={4} key={index}>
        <Box key={project.id} sx={{ minWidth: 200, maxWidth: 400}}>
          <Card variant='elevation' sx={{ backgroundColor: '#F5F5FA'}}> 
          <CardActionArea onClick={() => router.push(`./projects/sr1`) }> 
          <CardMedia
                    component="img"
                    alt="SR1 Landing Page"
                    height="250"
                    image='/sr1images/SR1_Landing Page.png'
                    sx={{objectFit: "fill"}}
                  />
                <CardContent>
                  <Stack direction='column' spacing={2}> 
                  <Typography className={`${styles.textColor} ${roboto.className}`} variant='h6' gutterBottom>
                  {project.properties['Name'].title[0].plain_text}
                  </Typography>
                  <Stack direction='row' spacing={1} key={index}>
                  {project.properties['Tags'].multi_select.map((tag: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => 
                     
                          <Chip className={`${roboto.className}`} key={index} variant="filled" color="primary" label={tag.name}/>
                   )}
                   </Stack>
                  <Typography className={`${roboto.className}`} noWrap={false} variant='body1' color="text.secondary" gutterBottom>
                       {project.properties['Description'].rich_text[0].text.content}
                  </Typography>
                  
                  </Stack>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="large" color="primary" onClick={() => router.push(`./projects/sr1`) }>
                 View Case Study
                </Button>
              </CardActions>
          </Card>
        </Box>
       </Grid>
      ))}
      {projects.slice(0,1).map((project, index) => (
       <Grid item xs={12} sm={12} md={4} key={index}>
        <Box key={project.id} sx={{ minWidth: 200, maxWidth: 400}}>
          <Card variant="elevation" sx={{ backgroundColor: '#F5F5FA'}}> 
         
          <CardActionArea onClick={() => router.push(`./projects/linkedin`) }> 
          <CardMedia
                    component="img"
                    alt="LinkedIn Landing Page"
                    height="250"
                    image='/linkedinimages/linkedinimage-1.png'
                    sx={{objectFit: "fill"}}
                  />
                <CardContent>
                  <Stack direction='column' spacing={2}> 
                  <Typography className={`${styles.textColor} ${roboto.className}`} variant='h6' gutterBottom>
                  {project.properties['Name'].title[0].plain_text}
                  </Typography>
                  <Stack direction='row' spacing={1} key={index}>
                  {project.properties['Tags'].multi_select.map((tag: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => 
                     
                          <Chip className={`${roboto.className}`} key={index} variant="filled" color="primary" label={tag.name}/>
                   )}
                   </Stack>
                   <Typography className={`${roboto.className}`} noWrap={false} variant='body1' color="text.secondary" gutterBottom>
                       {project.properties['Description'].rich_text[0].text.content}
                  </Typography>
                  </Stack>
                 
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="large" color="primary" onClick={() => router.push(`./projects/linkedin`) }>
                 View Case Study
                </Button>
              </CardActions>
          </Card>
        </Box>
       </Grid>
      ))}
      {projects.slice(4).map((project, index : number) => (
       <Grid item xs={12} sm={12} md={4} key={index}>
        <Box key={project.id} sx={{ minWidth: 200, maxWidth: 400}}>
          <Card variant="elevation" sx={{ backgroundColor: '#F5F5FA'}}> 
          
          <CardActionArea onClick={() => router.push(`./projects/teachmi`) }> 
          <CardMedia
                    component="img"
                    alt="SR1 Landing Page"
                    height="250"
                    image='/teachmiimages/teachmiimage-12.png'
                    sx={{objectFit: "fill"}}
                  />
                <CardContent>
                  <Stack direction='column' spacing={2}> 
                  <Typography className={`${styles.textColor} ${roboto.className}`} variant='h6' gutterBottom>
                  {project.properties['Name'].title[0].plain_text}
                  </Typography>
                  <Stack direction='row' spacing={1} key={index}>
                  {project.properties['Tags'].multi_select.map((tag: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => 
                     
                          <Chip className={`${roboto.className}`} key={index} variant="filled" color={(index ?? 2 % 2) == 0 ? 'primary' : 'secondary' } label={tag.name}/>
                   )}
                   </Stack>
                   <Typography className={`${roboto.className}`} noWrap={false} variant='body1' color="text.secondary" gutterBottom>
                       {project.properties['Description'].rich_text[0].text.content}
                  </Typography>
                  </Stack>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="large" color="primary"  onClick={() => router.push(`./projects/teachmi`) }>
                 View Case Study
                </Button>
              </CardActions>
                
          </Card>
        </Box>
       </Grid>
      ))}
      </Grid>
      </Container>
      </section>
    </>
  )
}



