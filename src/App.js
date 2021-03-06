import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import Homepage from "./pages/Homepage";
import ChampPage from "./pages/ChampPage";

function App() {
  return (
    <Router>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "auto",
        
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/champ/:id" element={<ChampPage/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
