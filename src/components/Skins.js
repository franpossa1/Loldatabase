import React from "react";
import { Avatar } from "@mui/material";

const Skins = (props) =>{
    console.log(props)
    return(
        <Avatar key={props.id}
                  sx={{ width: 70, height: 70,m:2,borderRadius:1, cursor: "pointer" }}
                  alt="Remy Sharp"
                  src={props.src}
                  onClick={props.handleClick ? props.handleClick :()=> props.handleText(props.name,props.description)}
                 
                 
                />
    )   
}
export default Skins