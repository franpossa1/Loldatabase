import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import React from "react";

const Searcher = ()=>{
    return(
<Container
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "auto",
        border: "1px solid red",
        justifyContent: "center",
      }}
    >
      <TextField
        sx={{ m: 1, width: "1" }}
        id="outlined-basic"
        label="Champion"
        variant="outlined"
      />

      <Button sx={{ m: 1 }} variant="contained">
        Buscar Campeon
      </Button>
      <Button sx={{ m: 1 }} variant="outlined">
        Crear Campeon
      </Button>
      </Container>


    )
}

export default Searcher;