import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const [input,setInput]=useState("");
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(input)
    {
      navigate(`/search/${input}`)
    }
  }
  return (
    <div>
        <Paper
        component="form"
        onSubmit={(e)=>handleSubmit(e)}
        sx={
            {
                borderRadius:20,
                border:"1px solid #e3e3e3",
                pl:2,
            }
        }
        >
          <input
            placeholder="Search here..."
            style={
                {
                    outline:"none",
                    border:"none"
                }
            }
            className='search-bar'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            // onKeyDown={(e)=>e.key==="Enter"?handleSubmit:null}
          />  
          <IconButton type='submit'>
            <Search/>
          </IconButton>
        </Paper>
    </div>
  )
}

export default SearchBox