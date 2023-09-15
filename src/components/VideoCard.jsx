import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl } from '../utils/constants'
const VideoCard = ({video:{id:{
    videoId
},snippet}}) => {
  return (
    <Card sx={{width:{md:"280px",xs:"100%",sm:"358px"},boxShadow:"none",borderRadius:"0"}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia 
        alt={snippet?.title}
        sx={{width:"100%",height:180}}
        image={snippet?.thumbnails?.high?.url} />
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e"}}>
    <NavLink to={videoId?`/video/${videoId}`:demoVideoUrl} style={{textDecoration:"none"}}>
    <Typography sx={{fontWeight:"bold",color:'white'}}>
        {snippet?.title.slice(0,50) || snippet?.title.slice(0,50)}
    </Typography>
    </NavLink>
    </CardContent>
    </Card>
  )
}

export default VideoCard