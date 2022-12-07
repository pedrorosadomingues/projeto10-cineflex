import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Sessions() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes`
    const promise = axios.get(URL)
    promise.then(res => setSessions(res.data.days))
  }, [])
  console.log(sessions)

  return (
    <div>
      {sessions.map((session) => <>
        <Day>{session.weekday} - {session.date}</Day>
        {session.showtimes.map((showtime) => <Time>{showtime.name}</Time>)}
      </>
      )}
    </div>
  );
}

const Day = styled.p`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
  `

const Time = styled.button`
  width: 82px;
  height: 43px;
  border-radius: 3px;
  background-color: #E8833A;

  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  
  margin-left: 5px;
  `