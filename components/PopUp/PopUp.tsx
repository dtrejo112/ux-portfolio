import * as React from 'react';
import {Box, Container, Modal} from '@mui/material';
import { Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';

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
    blockID: string;
  }
export default function PopUp(
  {url, 
   altText, 
   imageStyle, 
   xsModal, 
   smModal, 
   mdModal, 
   priorityHero,
   blockID }: PopUp) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [refresh, setRefresh] = useState(url);

  useEffect(() => {
   setRefresh(url);
  },[url]);

  return (
      <> 
        <Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}> 
       <Container disableGutters maxWidth="sm" sx={{position: 'relative', ml: '0px !important', mr: '0px !important'}}> 
       { priorityHero ? 
       <Image
        src={refresh}
        alt={altText}
        className={`${imageStyle} "w-full h-auto"`}
        onClick={handleOpen}
        sizes="100vw"
        width="0"
        height="0"
        quality={100}
        priority={true}
        placeholder='blur'
        blurDataURL="data:../../public/1x1-3f90e3ff.png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0n/D4PwAFewKzHX5IsAAAAABJRU5ErkJggg=="
        onError={async () => {
          const res = await fetch(`/api/image?blockID=${blockID}`).then((res) => res.json())
          setRefresh(res.imageSrc)
        }}
        /> :
        <Image
        src={refresh}
        alt={altText}
        className={`${imageStyle} "w-full h-auto"`}
        onClick={handleOpen}
        sizes="100vw"
        width="0"
        height="0"
        placeholder='blur'
        blurDataURL="data:../../public/1x1-3f90e3ff.png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0n/D4PwAFewKzHX5IsAAAAABJRU5ErkJggg=="
        onError={async () => {
          const res = await fetch(`/api/image?blockID=${blockID}`).then((res) => res.json())
          setRefresh(res.imageSrc)
        }}
        />}
        </Container>
        </Suspense>

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