import Header from "./components/Header";
import Films from "./components/Films";
import styled from "styled-components";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Cineflex>
        <Header />
        <Routes>
          <Route path="/" element= {<Films />} />
          <Route path="/sessions/:filmId" element={ <Sessions /> }/>
          <Route path="/seats/:sessionId" element={<Seats /> } />
        </Routes>
      </Cineflex>
    </BrowserRouter>
  );
}

const Cineflex = styled.div`
  width: 375px;
  margin: auto;
`