import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import ChannelDetail from './ChannelDetail'
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({channelDetail,marginTop})=> {
  return (
    <Card
    sx={{background:"black",boxShadow:"none",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",width:{md:"280px",xs:"100%",sm:"100%"},margin:"auto",marginTop:marginTop}}
    >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{textDecoration:"none"}}>
    <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",color:"#fff"}}>
    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{
        borderRadius:"50%",
        width:"160px",
        height:"170px",
        marginX:"auto",
    }}/>
    <Typography variant="h5" fontWeight={"bold"} sx={{textDecoration:"none"}}>
        {channelDetail?.snippet?.title.slice(0,10)+"..."}
        <CheckCircle sx={{ fontSize: "16px", color: "gray", ml: "5px" }} />
    </Typography>
    <Typography variant='body2'>
    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
    </Typography>
    </CardContent>
    </Link>
    </Card>

  )
}

export default ChannelCard
