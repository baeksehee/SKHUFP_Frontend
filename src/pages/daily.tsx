import styled from "styled-components";
import Nav from "../components/Nav";

export default function Daily() {
    return(
        <>
        <Nav />
        <Container>
            <h1>데일리룩 목록</h1>
            <Container2>
            <StyledGrid>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </StyledGrid>
        </Container2>
            <StyledAdd>➕</StyledAdd>
        </Container>
        </>
    )
}

const Container2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledGrid = styled.div`
display: grid;
grid-template-columns: 15vw 15vw 15vw;
grid-template-rows: 15vw 15vw 15vw;
`;

const Item = styled.div`
margin: 1rem;

background-color: #eeeeee;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 10vh;
`;

const StyledAdd = styled.button`
width: 4rem;
height: 4rem;

border: none;

background-color: #d0bcf2;
font-size: 1.5rem;
cursor: pointer;
`;