import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import loading from '../assets/loading.gif'

export default function Sessions({selectedFilm, setSelectedFilm, setTextHeader}) {
  const { filmId } = useParams();
  const [sessions, setSessions] = useState(undefined)
console.log(sessions)
  function selectShowTime(showtime, session){
      setSelectedFilm({...selectedFilm, showTime: session.weekday +' - ' +  showtime.name , session: session.date + " " + showtime.name })
  }
  useEffect(() => {
    setTextHeader("Selecione o horário")
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmId}/showtimes`
    const promise = axios.get(URL)
    promise.then(res => setSessions(res.data.days))
    promise.catch(err => console.log(err.response.data))
  }, [])
 
 if(sessions===undefined) return <img src={loading} alt="loading" />

  return (
    <div>
      {sessions.map((session) => <div data-test="movie-day"key={session.id}>
        <Day >{session.weekday} - {session.date}</Day>
        {session.showtimes.map((showtime) =><Link data-test="showtime" key={showtime.name} to={`/seats/${showtime.id}`}
        > 
        <Time onClick={()=>selectShowTime(showtime, session)}>{showtime.name}</Time>
        </Link>)}
      </div>
      )}
      <Footer selectedFilm={selectedFilm} />
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
  border: none;
  border-radius: 3px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  `