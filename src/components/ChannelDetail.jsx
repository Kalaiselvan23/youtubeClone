import React, { useEffect, useState } from 'react'
import {Videos,ChannelCard, Sidebar} from "./"
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetFromApi';
import { Box} from '@mui/material';

const ChannelDetail = () => {
  const {id}=useParams();
  const [channelDetail,setChannelDetail]=useState(null);
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box padding={2}>
      <Box>
        <div
        style={{backgroundImage:"linear-gradient(to right bottom, #051937, #434764, #7d7c94, #b9b5c8, #f7f3ff)",zIndex:10,height:"250px"}}
        >
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
      </Box>
      <Box sx={{mr:{sm:"100px"}}}/>
      <Box>
        <Videos videos={videos} />
      </Box>
      
    </Box>
  )
}

export default ChannelDetail