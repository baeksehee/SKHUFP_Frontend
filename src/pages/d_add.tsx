import styled from "styled-components";
import Nav from "../components/Nav";

export default function D_add() {
  return (
    <>
      <Nav />
      <Container>
        <StyledForm>
          {" "}
          <StyledH3>
            <StyledSpan>데일리룩 이름</StyledSpan> <StyledInput></StyledInput>
          </StyledH3>
          <StyledDiv>
            <TopDiv>상의</TopDiv>
            <OuterDiv>아우터</OuterDiv>
            <BagDiv>가방</BagDiv>
            <ButtonDiv>하의</ButtonDiv>
            <ShoesDiv>신발</ShoesDiv>
            <EtcDiv>기타</EtcDiv>
          </StyledDiv>
          <StyledButton>데일리룩 등록</StyledButton>
        </StyledForm>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledH3 = styled.h3`
  font-size: 38px;

  margin-bottom: 6vh;
`;

const StyledSpan = styled.span`
  margin-right: 2vw;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 24vw;
  height: 50px;

  font-size: 20px;

  background-color: #efefef;
  border: none;
`;

const StyledDiv = styled.div`
  //components의 Grid.tsx
  display: grid;
  grid-template-columns: 15vw 15vw 15vw;
  grid-template-rows: 15vw 15vw;
`;

const TopDiv = styled.div`
  margin: 1rem;
  
  text-align: center;

  background-color: #eeeeee;
`;

const OuterDiv = styled.div`
  margin: 1rem;

  text-align: center;

  background-color: #eeeeee;
`;

const BagDiv = styled.div`
  margin: 1rem;

  text-align: center;

  background-color: #eeeeee;
`;

const ButtonDiv = styled.div`
  margin: 1rem;

  text-align: center;

  background-color: #eeeeee;
`;

const ShoesDiv = styled.div`
  margin: 1rem;

  text-align: center;

  background-color: #eeeeee;
`;

const EtcDiv = styled.div`
  margin: 1rem;

  text-align: center;

  background-color: #eeeeee;
`;

const StyledButton = styled.button`
  margin-top: 12vh;

  width: 265px;
  height: 59px;

  background-color: #d0bcf2;

  font-size: 24px;

  border: none;
`;
