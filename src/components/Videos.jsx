import React from 'react'
import { Stack ,Box,CircularProgress} from '@mui/material'
import {ChannelCard,VideoCard} from "./"
const Videos = ({videos,direction}) => {
  return (
    <Stack direction={direction || "row"} className='videos' flexWrap={direction || "wrap"} sx={{overflowY:"scroll", height:"100vh",ml:2}}  justifyContent={"start"} alignItems={"center"} gap={2}>
      {!videos?.length?<CircularProgress sx={{position:'absolute',top:"50%",left:"50%"}}/>:videos.map((item,index)=>(
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos