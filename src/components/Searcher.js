import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import React from "react";

const Searcher = (props)=>{
    return(
<Container
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "auto",
       
        justifyContent: "center",
      }}
    >
      <TextField
        sx={{ m: 1, width: "1" }}
        id="outlined-basic"
        label="Champion"
        variant="outlined"
        onChange={(e)=> props.filtrado(e)}
      />

      <Button sx={{ m: 1 }} variant="contained">
        Buscar Campeon
      </Button>
      
      </Container>


    )
}

export default Searcher;