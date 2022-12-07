import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components'

export default function Films() {
    const [films, setFilms] = useState([])

    function goToSessions(id) {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`
    const promise = axios.get(URL)
    promise.then(res => console.log(res.data.days))
    promise.catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then(res => setFilms(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])


    return (
        <FilmsContainer>
            {films.map(film =>
            (<Film key={film.id}>
                <img onClick={()=> goToSessions(film.id)}src={film.posterURL} alt="Filme 1" />
            </Film>)
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