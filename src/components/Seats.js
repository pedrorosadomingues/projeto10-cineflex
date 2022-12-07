import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import selected from '../assets/selected.svg'
import available from '../assets/available.svg'
import unavailable from '../assets/unavailable.svg'

export default function Seats() {
  const [seats, setSeats] = useState([])

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats`
    const promise = axios.get(URL)
    promise.then(res => setSeats(res.data.seats))
  }, [])
  console.log(seats)

  return (
    <>
      <SeatsContainer>
      {seats.map((seat) => <>
        <Seat status={seat.isAvailable}>{seat.name}</Seat>
      </>
      )}
      </SeatsContainer>
      <Subtitle>
      <img src={selected} alt="selected"/>
      <img src={available} alt="selected"/>
      <img src={unavailable} alt="selected"/>
      </Subtitle>
    </>
      
  );
}

const SeatsContainer = styled.div`
display: flex;
gap: 7px;
flex-wrap: wrap;
padding-left: 20px;
`

const Seat = styled.button`
width: 26px;
height: 26px;
border-radius: 50%;
margin-top: 19px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.status ? "#C3CFD9" : "#FBE192"};
`

const Subtitle = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

margin-top: 20px;
`