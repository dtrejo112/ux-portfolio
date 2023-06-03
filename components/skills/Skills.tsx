import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Button, Container, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Step, StepButton, StepConnector, StepIconProps, StepLabel, Stepper, stepConnectorClasses, styled } from '@mui/material';
import { Roboto } from 'next/font/google';
import styles from './Skills.module.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';
import { Check } from '@mui/icons-material';

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
                <Box sx={{ width: '100%', padding: '1rem 0rem 2rem 0rem' }}>
                  <Stepper nonLinear activeStep={activeStep}>
                      <Step sx={{
                               '& .MuiSvgIcon-root.Mui-active': {
                                  color: '#D64309',
                               },
                              }}>
                        <StepButton onClick={handleStep(0)} 
                                    sx={{
                                      '& .MuiStepLabel-label.Mui-active': {
                                        color: '#D64309',
                                      }
                                    }} > Basic </StepButton>
                      </Step>
                      <Step sx={{
                               '& .MuiSvgIcon-root.Mui-active': {
                                color: '#3a4aa7',
                               },
                              }}>
                        <StepButton onClick={handleStep(1)}  sx={{
                                      '& .MuiStepLabel-label.Mui-active': {
                                        color: '#3a4aa7',
                                      }
                                    }} > Proficient </StepButton>
                      </Step>
                      <Step sx={{
                               '& .MuiSvgIcon-root.Mui-active': {
                                color: '#00645a',
                               },
                              }}>
                        <StepButton onClick={handleStep(2)} sx={{
                                      '& .MuiStepLabel-label.Mui-active': {
                                        color: '#00645a',
                                      }
                                    }}> Advanced </StepButton>
                      </Step>
                  </Stepper>
                </Box>
                <Grid sx={{justifyContent: { xs: "center", sm: "flex-start", md: "flex-start"}} }container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Paper variant='outlined'> 
                    <List sx={{padding: '1rem 2rem 1rem 2rem'}}>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Figma"
                        secondary='Advanced'
                        sx={{ 
                              '& .MuiListItemText-secondary': {
                                color: activeAdvanced ?  '#00645a' : 'black',
                              }
                           }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="CSS"
                        secondary='Proficient'
                        sx={{
                              '& .MuiListItemText-secondary': {
                                color: activeProficient ?  '#3a4aa7': 'black',
                              }
                            }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="HTML5"
                        secondary='Proficient'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeProficient ?  '#3a4aa7': 'black',
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Javascript"
                        secondary='Proficient'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeProficient?  '#3a4aa7': 'black',
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Prototyping"
                        secondary='Basic'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeBasic ?  '#D64309': 'black',
                          }
                        }}
                      />
                    </ListItem>
                </List>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                    <Paper variant='outlined'> 
                    <List sx={{padding: '1rem 2rem 1rem 2rem'}}>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Material UI"
                        secondary='Proficient'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeProficient ?  '#3a4aa7': 'black',
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Next.js"
                        secondary='Proficient'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeProficient ?  '#3a4aa7': 'black',
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Typescript"
                        secondary='Basic'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeBasic ?  '#D64309': 'black',
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="React"
                        secondary='Proficient'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeProficient?  '#3a4aa7': 'black',
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Git"
                        secondary='Basic'
                        sx={{
                          '& .MuiListItemText-secondary': {
                            color: activeBasic ?  '#D64309': 'black',
                          }
                        }}
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