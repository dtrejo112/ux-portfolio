import * as React from 'react';
import {Box, Container, Modal} from '@mui/material';
import { Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

interface PopUp {
    url: string;
    altText: string;
    imageStyle: string;
    priorityHero: boolean;
    blockID: string;
  }
export default function PopUp(
  {url, 
   altText, 
   imageStyle, 
   priorityHero,
   blockID }: PopUp) {

    const [refresh, setRefresh] = useState(url);
    const blur = "data:../../public/1x1-3f90e3ff.png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0n/D4PwAFewKzHX5IsAAAAABJRU5ErkJggg=="

  useEffect(() => {
   setRefresh(url);
  },[url]);

  return (
      <> 
     
       <Container disableGutters maxWidth="sm" sx={{position: 'relative', ml: '0px !important', mr: '0px !important'}}> 
       { priorityHero ? 
       <Image
        src={refresh}
        alt={altText}
        className={`${imageStyle} "w-full h-auto"`}
        sizes="100vw"
        width="0"
        height="0"
        quality={100}
        priority
        placeholder='blur'
        blurDataURL={blur}
        onError={async () => {
          setRefresh('/loading.png')
          const res = await fetch(`/api/image?blockID=${blockID}`).then((res) => res.json())
          setRefresh(res.imageSrc)
        }}
        /> :
        <Image
        src={refresh}
        alt={altText}
        className={`${imageStyle} "w-full h-auto"`}
        sizes="100vw"
        width="0"
        height="0"
        placeholder='blur'
        blurDataURL={blur}
        onError={async () => {
          setRefresh('/loading.png')
          const res = await fetch(`/api/image?blockID=${blockID}`).then((res) => res.json())
          setRefresh(res.imageSrc)
        }}
        />}
        </Container>
      </>
  );
}