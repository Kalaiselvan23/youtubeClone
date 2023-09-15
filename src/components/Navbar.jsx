import React from 'react'
import {logo} from "../utils/constants"
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import SearchBox from './SearchBox'

const Navbar = () => {
  return (
    <Stack 
    direction={'row'}
    alignItems={"center"}
    p={2}
    sx={{position:"sticky",background:"#000",top:0,justifyContent:"space-between",color:"white"}}
    >
      <Link to="/" style={{display:'flex',alignItems:"center"}}> 
        <img src={logo} height={45} />
      </Link>
      <SearchBox/>
    </Stack>
  )
}

export default Navbar