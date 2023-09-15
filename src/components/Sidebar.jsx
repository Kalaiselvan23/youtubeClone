import React from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'
const Sidebar = (props) => {
  const [selectedCategory,setSelectedCategory]=[...props.states]
    return (
    <Stack 
    sx={{
        height:{sx:"auto",md:"100%"},
        overflowY:"auto",
        flexDirection:{
            md:"column",
            sx:"row",
            xs:"row"
        },
        overflowX:"auto",
        gap:2,
        padding:2,
        
    }}
    className='sidebar'
    >
    {categories.map((category,index)=>
        <button key={index}
        style={{
            background:category.name==selectedCategory?"red":"black",
            borderRadius:"20px",
            color:"white",
            border:"none",
            outline:"none",
            display:"flex",
            alignItems:"center",
            justifyContent:"start",
            gap:10,
            paddin:4,
            width:"150px",
            "::hover":{
                background:"red",
            }
        }}
        onClick={()=>setSelectedCategory(category.name)}
        >
            <span style={{color:selectedCategory===category.name ?"white":"red"}}>{category.icon}</span>
            <span
            style={
                {
                    background:category.name==selectedCategory && "red"
                }
            }
            >{category.name}</span>
        </button>
    )}
    </Stack>
  )
}

export default Sidebar