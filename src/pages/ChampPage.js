import React from "react";


import {  useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../App.css";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import Skins from "../components/Skins";
import NextBack from "../components/NextBack";
const ChampPage = () => {
  const { id } = useParams();
  const champAPI = `http://ddragon.leagueoflegends.com/cdn/12.11.1/data/es_AR/champion/${id}.json`;
  const idChamp = id;
  const [onlyChamp, setOnlyChamp] = React.useState([]);
  const [onlySkins, setOnlySkins] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [trueimg, setTrueImg] = React.useState();
  const [trueDes, settrueDes] = React.useState();

  function fetchHook() {
    fetch(champAPI)
      .then((response) => response.json())
      .then((datx) => setOnlyChamp(datx.data));
    setLoading(false);
  }

  React.useEffect(() => {
    fetchHook();
    const realChamp = Object.values(onlyChamp);
    //setOnlySkins(realChamp[0].skins)
  }, []);

  const realChamp = Object.values(onlyChamp);

  console.log(realChamp);

  function imgLinkInit(id, num = 0) {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${num}.jpg`;
  }
  function handleClick(e) {
    e.preventDefault();
    const img = e.target.src;
    setTrueImg(img);
  }
  function handleText(name, description) {
    settrueDes({ name: name, description: description });
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        realChamp.map((champ) => (
          <Container
            key={champ.key}
            sx={{
              mt: 7,
              display: "flex",
              justifyContent: "center",
              border: "1px solid green",

              flexDirection: "column",
            }}
          >
           <div style={{"width":"100%"}}><NextBack/></div>
            {/* Este es el contenedor de imagen*/}
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid green",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  width: 480,
                  height: 300,
                }}
              >
                <img
                  className="imgresize"
                  src={trueimg ? trueimg : imgLinkInit(champ.id)}
                ></img>
              </Box>

              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  p: 3,
                  border: "1px solid green",

                  flexWrap: "wrap",
                }}
              >
                {champ.skins.map((Lskin) => {
                  return (
                    <Skins
                      id={champ.id}
                      skinnum={Lskin.num}
                      src={imgLinkInit(champ.id, Lskin.num)}
                      handleClick={handleClick}
                    />
                  );
                })}
              </Container>
            </Container>

            {/*Contenedor de texto*/}
            <Container
              sx={{
                display: "flex",

                border: "1px solid green",
                flexDirection: "column",
              }}
            >
              <h1>{champ.name}</h1>
              <h2>{champ.title}</h2>
              <p>{champ.lore}</p>
              <Divider />
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  p: 3,
                  border: "1px solid green",

                  flexWrap: "wrap",
                }}
              >
                {/*Skills pasivas y activas*/}

                <Avatar
                  sx={{ width: 70, height: 70 }}
                  alt="Remy Sharp"
                  src={`https://ddragon.leagueoflegends.com/cdn/11.7.1/img/passive/${champ.passive.image.full}`}
                />

                {champ.spells.map((spell) => {
                  return (
                    <Skins
                      id={spell.id}
                      src={`https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${spell.image.full}`}
                      handleText={handleText}
                      description={spell.description}
                      name={spell.name}
                    />
                  );
                })}

                <Divider />
                <Divider />
                <h3>{trueDes ? trueDes.name : champ.passive.name}</h3>
                <p>
                  {trueDes ? trueDes.description : champ.passive.description}
                </p>
              </Container>
            </Container>
          </Container>
        ))
      )}
    </div>
  );
};

export default ChampPage;
