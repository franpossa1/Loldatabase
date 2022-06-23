import React from "react";
import ChampionsCards from "../components/ChampionsCards";
import Loader from "../components/Loader";
import Searcher from "../components/Searcher";
import Container from "@mui/material/Container";

const Homepage = () => {
  const [champs, setChamps] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");

  const generalChampionAPI =
    "http://ddragon.leagueoflegends.com/cdn/12.9.1/data/es_AR/champion.json";

  function fetchHook() {
    fetch(generalChampionAPI)
      .then((response) => response.json())
      .then((datx) => setChamps(datx.data));
    setLoading(false);
  }

  React.useEffect(() => {
    fetchHook();
  }, []);
  function handleChange(e) {
    setSearch(e.target.value);
  }
  //const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  const champlist = Object.values(champs);
  const results = !search? champlist : champlist.filter((campeon)=>campeon.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
      <Searcher filtrado={handleChange} />

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          results.map((champ) => {
            return (
              <ChampionsCards
                url={champ.key}
                blurb={champ.blurb}
                title={champ.title}
                id={champ.id}
                img={champ.image.full}
                ckey={champ.key}
                name={champ.name}
              />
            );
          })
        )}
      </Container>
    </div>
  );
};

export default Homepage;
