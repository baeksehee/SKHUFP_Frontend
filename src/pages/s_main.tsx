import styled from "styled-components";
import Nav from "../components/Nav";
import List from "../components/List";
import Grid from "../components/Grid";

export default function S_Main() {
    return (
        <>
            <StyledS>봄</StyledS>
            <Nav />
            <Container>
                <List />
                <Grid />
                <StyledAdd>➕</StyledAdd>
            </Container>
        </>
    )
}

const StyledS = styled.span`
float: right;
margin-top: 1rem;
margin-right: 2rem;
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