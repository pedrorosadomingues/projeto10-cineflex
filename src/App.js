import Header from "./components/Header";
import Films from "./components/Films";
import styled from "styled-components";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [selectedFilm, setSelectedFilm] = useState({})
 
  return (
    <BrowserRouter>
      <Cineflex>
        <Header />
        <Routes>
          <Route path="/" element= {<Films 
          setSelectedFilm={setSelectedFilm}
          />} />
          <Route path="/sessions/:filmId" element={ <Sessions
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
           /> }/>
          <Route path="/seats/:sessionId" element={<Seats 
          selectedFilm={selectedFilm}
          /> } />
        </Routes>
      </Cineflex>
    </BrowserRouter>
  );
}

const Cineflex = styled.div`
  width: 375px;
  margin: auto;
`