import React, { useEffect, useState } from 'react'
import { Stack,Box, Typography } from '@mui/material'
import {Videos,Sidebar} from "./"
import { fetchFromAPI } from '../utils/fetFromApi'
const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('New')
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))

  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{
      sx:"column",
      md:"row",
    },
    }} className='feed'>
    <Box sx={{height:{sx:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d",px:{
      sx:0,
      md:2,
    }}}>
    <Sidebar states={[selectedCategory,setSelectedCategory]}/>
    </Box>
    <Box>
      <Typography variant='h4' fontWeight={"bold"} m={2}>
        {selectedCategory}
        <span style={{color:"red"}}>
         Videos
        </span>
      </Typography>
      <Videos videos={videos}/>
    </Box>
    
    </Stack>
  )
}

export default Feed