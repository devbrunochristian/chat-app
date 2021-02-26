/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogContent } from '@material-ui/core';

export interface Props {
  isOpen: boolean;
  title?: string;
  content: any;
  actions?: any;
}

function Modal({ content, isOpen, actions, title }: Props) {
  const [open, setopen] = useState(false);

  useEffect(() => {
    if ((!open && isOpen) || (!open && !isOpen)) {
      setopen(true);
    }
  }, [isOpen]);

  useEffect(() => {
    setopen(false);
  }, []);

  const handleClose = () => {
    setopen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <DialogContent dividers>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}

export default Modal;
