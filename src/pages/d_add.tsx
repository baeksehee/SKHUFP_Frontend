import styled from "styled-components";
import Nav from "../components/Nav";

export default function D_add() {
  return (
    <>
      <Nav />
      <Container>
        <StyledForm>
          {" "}
          <h1>
            <span>데일리룩 이름</span>
            <StyledInput />
          </h1>
          <Container2>
                    <StyledGrid>
                        <Item />
                        <Item />
                        <Item />
                        <StyledName>상의</StyledName>
                        <StyledName>가방</StyledName>
                        <StyledName>아우터</StyledName>
                    </StyledGrid>
                    <StyledGrid>
                        <Item />
                        <Item />
                        <Item />
                        <StyledName>하의</StyledName>
                        <StyledName>신발</StyledName>
                        <StyledName>기타</StyledName>
                    </StyledGrid>
                </Container2>

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 24vw;
  height: 23px;
  margin-left: 2vw;

  font-size: 20px;

  background-color: #efefef;
  border: none;
  outline: none;
`;

const Container2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledGrid = styled.div`
display: grid;
grid-template-columns: 15vw 15vw 15vw;
grid-template-rows: 15vw 60px;
`;

const Item = styled.div`
margin: 1rem;

background-color: #eeeeee;
`;

const StyledName = styled.button`
margin: 1rem;

border: 1px solid #d0bcf2;
border-radius: 10px;
background-color: #d0bcf2;
opacity: 0.5;
cursor: pointer;
`;

const StyledButton = styled.button`
  margin-top: 2em;

  width: 15vw;
  height: 25px;

  background-color: #d0bcf2;
  border: 1px solid #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
`;