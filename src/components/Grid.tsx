import styled from "styled-components";
import ItemModal from "./ItemModal";

export default function Grid() {
  return (
    <Container>
      <StyledGrid>
        <ItemModal />
        <ItemModal />
        <ItemModal />
        <ItemModal />
        <ItemModal />
        <ItemModal />
        <ItemModal />
        <ItemModal />
        <ItemModal />
      </StyledGrid>
    </Container>
  );
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