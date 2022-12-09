import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import selected from '../assets/selected.svg'
import available from '../assets/available.svg'
import unavailable from '../assets/unavailable.svg'
import { useParams } from 'react-router-dom';
import Seat from './Seat';
import Footer from './Footer';

export default function Seats({ selectedFilm }) {
  const { sessionId } = useParams();
  const [seats, setSeats] = useState(undefined);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`
    const promise = axios.get(URL)
    promise.then(res => setSeats(res.data.seats))
  }, [])
  console.log(seats)
  if (seats === undefined) return <div>Carregando...</div>
  return (
    <>
      <SeatsContainer>
        {seats.map((seat) => <div key={seat.name}>
          <Seat seat={seat} />
        </div>
        )}
      </SeatsContainer>
      <Subtitle>
        <img src={selected} alt="selected" />
        <img src={available} alt="selected" />
        <img src={unavailable} alt="selected" />
      </Subtitle>
      <Subtitle>
        <p>Selecionado</p>
        <p>Disponível</p>
        <p>Indisponível</p>
      </Subtitle>
      <InputsContainer>
        <p>Nome do comprador:</p>
        <input type="text" placeholder="Digite seu nome..." />
        <p>CPF do comprador:</p>
        <input type="text" placeholder="Digite seu CPF..." />
      </InputsContainer>
      <Button>Reservar Assento(s)</Button>
      <Footer selectedFilm={selectedFilm} />
    </>

  );
}

const SeatsContainer = styled.div`
display: flex;
gap: 7px;
flex-wrap: wrap;
padding-left: 20px;
`

// const Seat = styled.button`
// width: 26px;
// height: 26px;
// border-radius: 50%;
// margin-top: 19px;
// display: flex;
// justify-content: center;
// align-items: center;
// background: ${props => seatColor(props.status)};
// `

const Subtitle = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

margin-top: 20px;
`

const InputsContainer = styled.div`
margin-top: 20px;
width: 90%;

input{
  height: 51px;
  width: 100%;
  border-radius: 3px;
  margin: 5px 0;
  padding-left: 10px;
}
`
const Button = styled.button`
 width: 60%;
  height: 42px;
 display: block;
 margin: 57px auto 20px auto;

 background-color: #E8833A;
 color: white;
 font-family: 'Roboto', sans-serif;
 font-size: 18px;


`
