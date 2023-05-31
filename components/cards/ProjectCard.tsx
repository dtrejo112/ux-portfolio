import styles from './ProjectCard.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Container, Divider, Grid, Stack } from '@mui/material';
import { CardActionArea } from '@mui/material';

import { Roboto } from 'next/font/google';
import router from 'next/router';
 
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
        <Typography className={`${styles.textColor} ${roboto.className}`} sx={{alignSelf:'flex-start'}} variant="h3" gutterBottom>
                  Case Studies
        </Typography>
      <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} } container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {projects.map((project, index) => (
       <Grid item xs={12} sm={12} md={4} key={index}>
        <Box key={project.id} sx={{ minWidth: 200, maxWidth: 400}}>
          <Card variant="outlined"> 
          <CardActionArea onClick={() => router.push(`./projects/${projectLinks[index].page}`) }> 
                <CardContent>
                  <Stack direction='column' spacing={1}> 
                  <Typography className={`${styles.textColor} ${roboto.className}`} sx={{ fontSize: 14 }} gutterBottom>
                  {project.properties['Name'].title[0].plain_text}
                  </Typography>
                  <Stack direction='row' spacing={1} key={index}>
                  {project.properties['Tags'].multi_select.map((tag, index) => 
                     
                          <Chip className={`${roboto.className}`} key={index} variant="outlined" color="primary" label={tag.name}/>
                   )}
                   </Stack>
                   <Typography className={`${styles.textColor} ${roboto.className}`} noWrap={false} sx={{ fontSize: 14 }} gutterBottom>
                       {project.properties['Description'].rich_text[0].text.content}
                  </Typography>
                  </Stack>
                </CardContent>
                </CardActionArea>
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



