import styled from "styled-components";

export default function Header({textHeader}) {
    return (
        <>
            <TopHeader>
                <h1>CINEFLEX</h1>
            </TopHeader>
            <BottomHeader text={textHeader}>
                <h2>{textHeader}</h2>
            </BottomHeader>

        </>
    );
}

const TopHeader = styled.div`
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E8833A;

    font-family: 'Roboto', sans-serif;
    font-size: 34px;

    background-color: #C3CFD9;
`


const BottomHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    color: ${props => props.text === "Pedido feito com sucesso!" ? "#1AAE9E" : "#293845" };
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    `