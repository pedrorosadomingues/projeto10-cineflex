import Header from "./components/Header";
import Films from "./components/Films";
import styled from "styled-components";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [selectedFilm, setSelectedFilm] = useState({})
  const [form, setForm] = useState({ids: [], name: "", cpf: "" , seats: []});
  const [textHeader, setTextHeader] = useState("Selecione o filme");
 
  return (
    <BrowserRouter>
      <Cineflex>
        <Header 
        textHeader={textHeader}
        />
        <Routes>
          <Route path="/" element= {<Films 
          setSelectedFilm={setSelectedFilm}
          setForm={setForm}
          setTextHeader={setTextHeader}
          />} />
          <Route path="/sessions/:filmId" element={ <Sessions
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}
          setTextHeader={setTextHeader}
           /> }/>
          <Route 
          path="/seats/:sessionId" 
          element={<Seats 
          selectedFilm={selectedFilm}
          form={form}
          setForm={setForm}
          setTextHeader={setTextHeader}
          /> } />
          <Route
           path="/success" element={<Success 
           form={form} 
           selectedFilm={selectedFilm}
           setTextHeader={setTextHeader}
           />} />
        </Routes>
      </Cineflex>
    </BrowserRouter>
  );
}

const Cineflex = styled.div`
  width: 375px;
  margin: auto;
`