import * as React from 'react';
import {Button,Snackbar} from '@mui/material';
import { Roboto } from 'next/font/google';
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
});

interface Copy {
    textToCopy: string;
  }
export default function CopyButton({textToCopy}: Copy) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(`${textToCopy}`);
      };

  return (
    <>
        <Button variant="outlined" startIcon={<ContentCopyIcon />} onClick={handleClick}> Copy Text </Button>
        <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
}