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
    let arraySeats = form.seats

    function selectSeat( seat) {
        if (!seat.isAvailable) {
            alert('Esse assento não está disponível')
        }
        if (seat.isAvailable === true) {
            arrayIds.push(seat.id)
            arraySeats.push(seat.name)
            setSeat({ ...seatState, isAvailable: "selected" })
            setForm({ ...form, ids: [...arrayIds], seats: [...arraySeats] })
        }
        if (seat.isAvailable === 'selected') {
            setSeat({ ...seatState, isAvailable: true })
        }
    }
    return (
        <SeatStyled onClick={() => selectSeat(seatState)} status={seatState.isAvailable}>{seat.name}</SeatStyled>
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