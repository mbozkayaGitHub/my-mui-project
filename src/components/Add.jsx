import { Fab, Modal, Tooltip,styled, Typography, Avatar } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import {Box} from "@mui/system";





const StyledModal = styled(Modal)({
    display:"flex",
    alignItem:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display:"flex",
    alignItem:"center",
    justifyContent:"center"
})


const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e => setOpen(true)}
      title="Delete" sx={{psition:"fixed",bottom:20, 
      left:{xs:"calc(50% - 25px)"}}}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
  open={open}
  onClose={e => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" padding={3} borderRadius={5}>
   <Typography variant="h6" color="gray" textAlign= "center" > 
    Create Post
   </Typography>
   <UserBox>
    <Avatar src="https://media.istockphoto.com/id/1270067126/tr/foto%C4%9Fraf/kameraya-bakan-g%C3%BClen-hintli-adam.jpg?s=612x612&w=0&k=20&c=55UY4nNEZOhbNlQri6RQQD2EoJrl55imj_GGdgDjBaM="
    /> 
    <Typography fontWeight={500} variant="span">
        Mike again
    </Typography>

   </UserBox>
  </Box>
</StyledModal>
    </>
  );
};

export default Add;
