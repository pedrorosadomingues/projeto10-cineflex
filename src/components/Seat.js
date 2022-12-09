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
export default function Seat({ seat }) {
    const [seatState, setSeat] = useState(seat)

    function selectSeat(isAvailable) {
        console.log(isAvailable)

        if (!isAvailable) {
            alert('Esse assento não está disponível')
            return
        }
        if (isAvailable===true) {     
            setSeat({ ...seatState, isAvailable: "selected" })
        }
        if (isAvailable === 'selected') {
            return setSeat({ ...seatState, isAvailable: true })
        }
        
    }
    return (
        <SeatStyled onClick={() => selectSeat(seatState.isAvailable, seat.name)} status={seatState.isAvailable}>{seat.name}</SeatStyled>
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