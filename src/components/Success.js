import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Success({ form, selectedFilm, setTextHeader }) {
    setTextHeader("Pedido feito com sucesso!")
    return (
        <SuccessText>
            <h1>Filme e sessao</h1>
            <h2>{selectedFilm.title}</h2>
            <h2>{selectedFilm.session}</h2>
            <h1>Ingressos</h1>
            {form.seats.map((s) => <h2>Assento: {s}</h2>)}

            <h1>Comprador</h1>
            <h2>Nome: {form.name}</h2>
            <h2>CPF: {form.cpf}</h2>

            <Button>
                <Link to="/">Voltar para Home</Link>
            </Button>
        </SuccessText>
    )
}

const SuccessText = styled.div`
h1 {
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #293845;
    margin-bottom: 10px;
    margin-top: 30px;
}
h2 {
    font-size: 22px;
    font-family: 'Roboto', sans-serif;
    line-height: 25px;
    color: #293845;
}
`
const Button = styled.button`
 width: 60%;
  height: 42px;
 display: block;
 margin: 57px auto 20px auto;

 background-color: #E8833A;
 border: none;
    border-radius: 3px;
 
a{
 text-decoration: none;
 color: white;
 font-family: 'Roboto', sans-serif;
 font-size: 18px;
 
}
`
