import { Avatar, AvatarGroup, Box, ImageList, Typography,ImageListItem, List,ListItem,ListItemAvatar,ListItemText,Divider } from '@mui/material'
import React from 'react'

const Rigthbar = () => {
  return (
    <Box  flex={2} p={2}  sx={{display:{xs:"none",sm:"block"}}} >
    
    <Box position="fixed" width={300}> 
  <Typography variant="h6" fontWeight={100} >Online Friends</Typography>
  <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/15.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} gap={5} mt={2} mb={2} >Latest Photos</Typography>
<ImageList cols={3} rowHeigth={100}>
  <ImageListItem>
    <img src="https://i.cnnturk.com/i/cnnturk/75/740x416/641abf8f2af10713986fa17b.jpg" alt="" />
  </ImageListItem>
  <ImageListItem>
    <img src="https://blog.n11.com/wp-content/uploads/2021/04/shutterstock_1691716210-3.jpg" alt="" />
  </ImageListItem>
  <ImageListItem>
    <img src="https://im.haberturk.com/2023/03/22/3575993_9d8a7838e71875fdef4fc3f222ca78eb_1366x1366.jpg" alt="" />
  </ImageListItem>
</ImageList>
<Typography variant="h6" fontWeight={100} gap={5} mt={2} mb={2} >Latest Conservation</Typography>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://ca.slack-edge.com/T0491MX9EDC-U04AQLE11B6-0f6f92cedaa2-512" />
        </ListItemAvatar>
        <ListItemText
          primary="Let's start a Project?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
            Mehmet Yıldız
              </Typography>
              {" — I'll make myself available for it.."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cemalettin Dimlioğlu" src="https://ca.slack-edge.com/T0491MX9EDC-U04AHMTD01H-f2fc97461120-512" />
        </ListItemAvatar>
        <ListItemText
          primary="Happy Ramadan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Cemalettin Dimlioğlu
              </Typography>
              {" — I wish you all a happy and blessed Ramadan"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://ca.slack-edge.com/T0491MX9EDC-U049EHSPJ79-098c5b33ceef-512" />
        </ListItemAvatar>
        <ListItemText
          primary="Working this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
             İsmail Hocam
              </Typography>
              {' — I will be out of town this weekend…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  </Box>
  
    </Box>
  )
}

export default Rigthbar