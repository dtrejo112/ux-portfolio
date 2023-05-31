import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Button, Container, IconButton, Link, Modal, Paper, Toolbar } from '@mui/material';
import { Roboto } from 'next/font/google';
import router from 'next/router';
import styles from './NavBar.module.css'
import { useState } from 'react';

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
  }
export default function PopUp({url, altText, imageStyle, modalStyle, xsModal, smModal, mdModal}: PopUp) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <img
        src={url}
        alt={altText}
        className={imageStyle}
        onClick={handleOpen}
        />
        <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        > 
        <Box className={modalStyle} sx={{ width: {xs: `${xsModal}`, sm: `${smModal}`, md: `${mdModal}` }}}> 
        <img
        src={url}
        alt={altText}
        className={imageStyle}
        />
        </Box>
        </Modal>
    </>
  );
}