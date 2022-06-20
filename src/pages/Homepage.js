
import React from "react";
import ChampionsCards from "../components/ChampionsCards";
import Loader from "../components/Loader";
import Searcher from "../components/Searcher";
import Container from "@mui/material/Container";

const Homepage = () => {

    const [champs, setChamps] = React.useState([]);
    const [loading,setLoading] = React.useState(true);

    const generalChampionAPI =
    "http://ddragon.leagueoflegends.com/cdn/12.9.1/data/es_AR/champion.json";

  function fetchHook() {
        fetch(generalChampionAPI)
          .then((response) => response.json())
          .then((datx) =>
            setChamps(datx.data)
            );
            setLoading(false);
           }   



    React.useEffect(()=>{
        fetchHook();
    },[])

     const champlist = Object.values(champs)  
     

    return(
        <div>
            
            <Searcher/>
            
            <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid green",
          flexWrap: "wrap",
        }}
      >
            {loading ? <Loader/> : 
        
        
        
        
        champlist.map((champ)=>{
            return <ChampionsCards url={champ.key} blurb={champ.blurb} title={champ.title} id={champ.id} img={champ.image.full} key={champ.key} name={champ.name} />
          })}
          
          </Container>
          </div>
    )
}

export default Homepage 