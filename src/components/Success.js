import { Link } from "react-router-dom";
export default function Success({ form, selectedFilm}) {
    return (
        <div>
            <h1>Filme e sessao</h1>
            <h2>Filme: {selectedFilm.title}</h2>
            <h2>{selectedFilm.session}</h2>
            <h1>Ingressos</h1>
            {form.seats.map((s) => <h2>Assento: {s}</h2>)}

            <h1>Comprador</h1>
            <h2>Nome: {form.name}</h2>
            <h2>CPF: {form.cpf}</h2>

            <button>
                <Link to="/">Voltar para Home</Link>
            </button>
        </div>
    )
}