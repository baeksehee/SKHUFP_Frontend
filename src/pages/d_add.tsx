import styled from "styled-components";
import Nav from "../components/Nav";

export default function D_add() {
    return (
        <>
            <Nav />
            <Container>
                <StyledNav>
                    상의 | 하의 | 아우터 | 신발 | 가방 | 잡화
                </StyledNav>
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
                <div>
                    <StyledBtn>선택 완료</StyledBtn>
                    <StyledSpan>선택 안 함</StyledSpan>
                </div>
            </Container>
        </>
    )
}

const StyledNav = styled.nav`
cursor: pointer;
`;

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

const StyledSpan = styled.div`
float: right;

color: #d9d9d9;
cursor: pointer;
`;