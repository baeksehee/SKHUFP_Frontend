import styled from "styled-components";
import Grid from "../components/Grid";
import List from "../components/List";

export default function D_add() {
    return(
        <Container>
            <List />
            <StyledGrid>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
                <Item><input type="radio" /></Item>
            </StyledGrid>
            <StyledBtn>선택 완료</StyledBtn>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 10vh;
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

const StyledBtn = styled.button`
width: 15vw;
height: 25px;

border: 1px solid #d0bcf2;

background-color: #d0bcf2;
cursor: pointer;

&:hover {
    color: #d0bcf2;
    background-color: white;
  }
`;