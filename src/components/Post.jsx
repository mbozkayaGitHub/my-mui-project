import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
const Post = () => {
  return (
    <div>
         <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          <MoreVert/>
          </IconButton>
        }
        title="Mustafa Bozkaya"
        subheader="March 23rd, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://image.cnbcfm.com/api/v1/image/106466237-1585559723548gullfoss.jpg?v=1585563337&w=740&h=416&ffmt=webp&vtcrop=y"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        People have traveled to see this waterfall as far back as 1875, when it was on private property. The family who owned it eventually built a trail for people that led to the falls.The gorge was formed by flash flooding, which still occurs today. When it happens, the 105-foot gorge fills completely to the top with the falls, spilling enough water to fill an Olympic-sized swimming pool every second.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
         <Share/>
        </IconButton>
        
      </CardActions>
     
    </Card>
    </div>
  )
}

export default Post