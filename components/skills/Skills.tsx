import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Step, StepButton, Stepper} from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './Skills.module.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});



export default function Skills() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeBasic, setBasic] = useState(true);
  const [activeProficient, setProficient] = useState(false);
  const [activeAdvanced, setAdvanced] = useState(false);
  const handleStep = (step: number) => () => {
    setActiveStep(step);
    if (step == 0) { 
      setBasic(true);
      setProficient(false);
      setAdvanced(false);
    }
    if (step == 1) {
      setBasic(false);
      setProficient(true);
      setAdvanced(false);
    }
    if (step == 2) {
      setBasic(false);
      setProficient(false);
      setAdvanced(true);
    }
  };

  return (
    <>
        <section id='skills'>
            <Container className={styles.container}>
                <Typography className={`${styles.skillsHeader} ${roboto.className}`} sx={{alignSelf:'flex-start'}} variant="h3" gutterBottom>
                   Skills
                </Typography>
        
                <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} }container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Paper variant='outlined'> 
                    <List 
                          sx= {
                                {
                                  padding: '1rem 2rem 1rem 2rem'
                                }
                              }
                          aria-labelledby="design-skills-subheader"
                          subheader={
                        <ListSubheader component="div" id="design-skills-subheader">
                           Skills
                        </ListSubheader>
                      }
                    >
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="User Journeys"
                        secondary='Proficient'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Personas"
                        secondary='Proficient'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Site Maps"
                        secondary='Proficient'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Empathy"
                        secondary='Advanced'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Prototyping"
                        secondary='Proficient'
                      />
                    </ListItem>
                </List>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                    <Paper variant='outlined'> 
                    <List 
                        sx= { 
                              { 
                                padding: '1rem 2rem 1rem 2rem'
                              }
                            } 
                        aria-labelledby="developer-skills-subheader"
                        subheader={
                       <ListSubheader component="div" id="developer-skills-subheader">
                            Tools
                       </ListSubheader>
                     }
                    >
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Figma"
                        secondary='Advanced'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Next.js"
                        secondary='Proficient'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="JavaScript"
                        secondary='Proficient'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="CSS"
                        secondary='Proficient'
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="InVision"
                        secondary='Basic'
                      />
                    </ListItem>
                </List>
                </Paper>
              </Grid>
            </Grid>
            </Container>
        </section>
    </>  
  );
}