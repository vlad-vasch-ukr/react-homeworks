import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function Modal({ open, title, children, handleClose }) {
  return (
    <Dialog
        open={ open }
        keepMounted
        onClose={ handleClose }
      >
        <DialogTitle variant="h5" component="h2" sx={{ textAlign: "center" }}>
          { title }
        </DialogTitle>
        <DialogContent>
          { children }
        </DialogContent>
      </Dialog>
  )
}