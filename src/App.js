import Header from "./components/Header";
import Films from "./components/Films";
import styled from "styled-components";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";

export default function App() {
  //const [selectedFilm, setSelectedFilm] = useState(null);
  return (
    <Cineflex>
      <Header />
      {/* <Films /> */}
      {/* <Sessions /> */}
      <Seats />
    </Cineflex>
  );
}
 
const Cineflex = styled.div`
  width: 375px;
  margin: auto;
`