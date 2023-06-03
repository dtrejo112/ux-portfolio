import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Button, Container, IconButton, Link, Modal, Paper, Toolbar } from '@mui/material';
import { Roboto } from 'next/font/google';
import router from 'next/router';
import styles from './NavBar.module.css'
import { useState } from 'react';
import Image from 'next/image';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

interface PopUp {
    url: string;
    altText: string;
    imageStyle: string;
    modalStyle: string;
    xsModal: string;
    smModal: string;
    mdModal: string;
    priorityHero: boolean;
  }
export default function PopUp({url, altText, imageStyle, modalStyle, xsModal, smModal, mdModal, priorityHero}: PopUp) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
      <> 
      
       <Container disableGutters maxWidth="sm" sx={{position: 'relative'}}> 
        <Image
        src={url}
        alt={altText}
        className={`${imageStyle} "w-full h-auto"`}
        onClick={handleOpen}
        sizes="100vw"
        width="0"
        height="0"
        priority={priorityHero}
        // placeholder='blur'
        // blurDataURL="data:../../public/1x1-3f90e3ff.png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0n/D4PwAFewKzHX5IsAAAAABJRU5ErkJggg=="
        />
        </Container>

        <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{color: '#cfe8fc'}}
        > 
        <Container disableGutters sx={{bgcolor: 'background.paper', position: 'relative', width: {xs: `${xsModal}`, sm: `${smModal}`, md: `${mdModal}` }}}> 
        <Image
        src={url}
        alt={altText}
        className={`${imageStyle} "w-full h-auto"`}
        onClick={handleOpen}
        sizes="100vw"
        width="0"
        height="0"
        />
        </Container>
        </Modal>
        
    </>
  );
}