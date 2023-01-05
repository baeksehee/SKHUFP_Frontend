import styled from "styled-components";

export default function Grid() {
    return (
        <Container>
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
        </Container>
    )
}

const Container = styled.div`
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