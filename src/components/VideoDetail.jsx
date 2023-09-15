import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetFromApi'
import { Stack ,Box, Typography} from '@mui/material'
import ReactPlayer from 'react-player'
import Videos from './Videos'

const VideoDetail = () => {
  const {id}=useParams()
  const [Video, setVideo] = useState(null)
  const [RelatedVids, setRelatedVids] = useState(null)
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideo(data.items[0]))

    fetchFromAPI(`search?part=snippet&srelatedToVideoId=${id}&type=video`)
    .then((data)=>setRelatedVids(data.items))
  },[id])
  // if(Video?.snippet) return "Loading"
  // console.log(RelatedVids)
  // console.log(Video.snippet.title)
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {Video?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${Video?.snippet?.channelId}`} style={{textDecoration:"none"}}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {Video?.snippet?.channelTitle}
                  {/* <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /> */}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(Video?.snippet?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(Video?.snippet?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={RelatedVids} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail