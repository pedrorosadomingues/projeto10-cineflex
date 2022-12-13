import styled from "styled-components"

export default function Footer({ selectedFilm }) {
    return (
        <FooterContainer>
            <FooterImage data-test="footer">
                <img src={selectedFilm.posterURL} alt={selectedFilm.title} />
            </FooterImage>
            <FooterText>
            <h1>{selectedFilm.title}</h1>
            <h1>{selectedFilm.showTime}</h1>
            </FooterText>
        </FooterContainer>
    )
}


const FooterImage = styled.div`
    padding: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background-color: white;
    margin-right: 5px;
img{
width: 64px;
height: 89px;
}
`

const FooterContainer = styled.div`
margin-top: 10px;
display: flex;
background-color: #DFE6ED;
h1{
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    color: #293845;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 5px;
}
h1:nth-child(2){

    margin-top: 10px;
}
`

const FooterText = styled.div`
display: flex;
flex-direction: column;
`