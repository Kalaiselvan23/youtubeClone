import React, { useEffect, useState } from 'react'
import {Box, Typography } from '@mui/material'
import {Videos} from "./"
import { fetchFromAPI } from '../utils/fetFromApi'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const {id} = useParams()
  const [videos,setVideos]=useState([]);
  useEffect(()=>{       //get called when the application load
    fetchFromAPI(`search?part=snippet&q=${id}`)
    .then((data)=>setVideos(data.items))
    .catch((err)=>console.log(err))   //call this function to get data from API and store it in videos variable
  },[id])
  return (
    <Box>
      <Typography variant='h4' fontWeight={"bold"} m={2}>
      Search Result for:
        <span style={{color:"red"}}>
         {id} Videos
        </span>
      </Typography>
      <Videos videos={videos}/>
    </Box>
    
  )
}

export default SearchFeed