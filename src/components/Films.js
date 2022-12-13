import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import loading from "../assets/loading.gif"


export default function Films({ setSelectedFilm, setForm, setTextHeader }) {
    const [films, setFilms] = useState(undefined)

    function selectFilm(film) {
        setSelectedFilm(film) 
    }
    useEffect(() => {
        setTextHeader("Selecione o filme")
        setForm({ ids: [], name: "", cpf: "", seats: [] });
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then(res => setFilms(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])

    if (films === undefined) return <img src={loading} alt="loading" />

    return (
        <FilmsContainer>
            {films.map(film =>
            (<Link data-test="movie" key={film.id} to={`/sessions/${film.id}`}>
                <Film onClick={() => selectFilm(film)} >
                    <img src={film.posterURL} alt="Filme 1" />
                </Film>
            </Link>)
            )}
        </FilmsContainer>
    )
}

const FilmsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 30px;
justify-content: center;
`

const Film = styled.div`
padding: 10px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
img{
width: 129px;
height: 193px;
}
`