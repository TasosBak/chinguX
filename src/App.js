import React from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Box, Container } from "@material-ui/core";
import Launches from "./components/Launches";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Launches></Launches>
        </Box>
      </Container>
    </div>
  );
}

export default App;
