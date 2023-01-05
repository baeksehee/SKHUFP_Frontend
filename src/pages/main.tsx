import styled from "styled-components";
import Grid from "../components/Grid";
import List from "../components/List";

export default function Main() {
    return(
        <Container>
            <List />
            <Grid />
            <StyledAdd>➕</StyledAdd>
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

const StyledAdd = styled.button`
width: 4rem;
height: 4rem;

border: none;

background-color: #d0bcf2;
font-size: 1.5rem;
cursor: pointer;
`;