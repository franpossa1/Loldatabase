import React from "react";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const NextBack = () =>{
    return(
<Container
            
            sx={{
             
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid green",

              flexDirection: "row",
            }}
          >

<Button variant="outlined"><Link to={`/`}> ATRAS</Link></Button>


          </Container>


    )
}

export default NextBack