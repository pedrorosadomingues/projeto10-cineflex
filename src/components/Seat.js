import styled from "styled-components"
import { useState } from "react"

function seatColor(isAvailable) {
    if (!isAvailable) {
        return "#FBE192"
    }
    if (isAvailable === "selected") {
        return "#1AAE9E"
    }
    if (isAvailable) {
        return "#C3CFD9"
    }
}
export default function Seat({ seat, form, setForm }) {
    const [seatState, setSeat] = useState(seat)

    let arrayIds = form.ids

    function selectSeat(isAvailable, id) {
        if (!isAvailable) {
            alert('Esse assento não está disponível')
        }
        if (isAvailable === true) {
            arrayIds.push(id)
            setSeat({ ...seatState, isAvailable: "selected" })
            setForm({ ...form, ids: [...arrayIds] })
        }
        if (isAvailable === 'selected') {
            setSeat({ ...seatState, isAvailable: true })
        }
    }
    return (
        <SeatStyled onClick={() => selectSeat(seatState.isAvailable, seat.id)} status={seatState.isAvailable}>{seat.name}</SeatStyled>
    )
}

const SeatStyled = styled.button`
width: 26px;
height: 26px;
border-radius: 50%;
margin-top: 19px;
display: flex;
justify-content: center;
align-items: center;
background: ${props => seatColor(props.status)};
`