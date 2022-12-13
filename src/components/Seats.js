import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import selected from '../assets/selected.svg'
import available from '../assets/available.svg'
import unavailable from '../assets/unavailable.svg'
import { useNavigate, useParams } from 'react-router-dom';
import Seat from './Seat';
import Footer from './Footer';
import loading from '../assets/loading.gif'

export default function Seats({ selectedFilm, form, setForm, setTextHeader }) {
  const { sessionId } = useParams();
  const [seats, setSeats] = useState(undefined);
  const navigate = useNavigate();

  function bookSeat(e) {
    e.preventDefault();
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`
    const promise = axios.post(URL, { ids: form.ids, name: form.name, cpf: form.cpf })
    promise.then(res => navigate('/success'))
  }

  useEffect(() => {
    setTextHeader("Selecione o(s) assento(s)")
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`
    const promise = axios.get(URL)
    promise.then(res => setSeats(res.data.seats))
  }, [])

  if (seats === undefined) return <img src={loading} alt="loading" />

  return (
    <>
      <SeatsContainer>
        {seats.map((seat) => <div key={seat.name}>
          <Seat
            seat={seat}
            form={form}
            setForm={setForm}
          />
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
      <form onSubmit={bookSeat}>
        <InputsContainer>
          <label>Nome do comprador:</label>
          <input
            type="text"
            placeholder="Digite seu nome..." v
            alue={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            data-test="client-name"
          />
          <label>CPF do comprador:</label>
          <input type="text"
            placeholder="Digite seu CPF..."
            value={form.cpf}
            onChange={e => setForm({ ...form, cpf: e.target.value })}
            required
            data-test="client-cpf"
          />
        </InputsContainer>
        <Button data-test="book-seat-btn" type="submit">Reservar Assento(s)</Button>
      </form>
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

const Subtitle = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

margin-top: 20px;

p {
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  color: #4E5A65;

}
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
label {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #293845;
}
`
const Button = styled.button`
 width: 60%;
  height: 42px;
 display: block;
 margin: 57px auto 20px auto;
 border: none;
   border-radius: 3px;
 background-color: #E8833A;
 color: white;
 font-family: 'Roboto', sans-serif;
 font-size: 18px;


`