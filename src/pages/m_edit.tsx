import styled from "styled-components";
import Nav from "../components/Nav";

export default function M_edit() {
  return (
    <>
      <Nav />
      <Container>
        <StyledForm>
          <h1>수정</h1>
          <ImageDiv></ImageDiv>
          <InputDiv>
            <InputSmallDiv>
              <StyledLongSpan>계절(복수선택)</StyledLongSpan>
              <StyledSelect name="season">
                <option value="spring" selected>
                  {" "}
                  봄
                </option>
                <option value="summer">여름</option>
                <option value="autumn">가을</option>
                <option value="winter">겨울</option>
              </StyledSelect>
            </InputSmallDiv>
            <InputSmallDiv>
              <StyledLongSpan>카테고리(택1)</StyledLongSpan>
              <StyledSelectTwo name="season">
                <option value="1" selected>
                  전체
                </option>
                <option value="2">상의</option>
                <option value="3">하의</option>
                <option value="4">아우터</option>
                <option value="5">신발</option>
                <option value="6">가방</option>
                <option value="7">잡화</option>
              </StyledSelectTwo>
            </InputSmallDiv>
            <InputSmallDiv>
              <StyledSpan>이름</StyledSpan>
              <StyledNameInput></StyledNameInput>
            </InputSmallDiv>
            <InputSmallDiv>
              <StyledSpan>메모</StyledSpan>
              <StyledMemoInput></StyledMemoInput>
            </InputSmallDiv>
          </InputDiv>
          <StyledButton>수정</StyledButton>
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

const ImageDiv = styled.div`
  margin-left: 12.5vw;
  margin-top: 32px;

  width: 10rem;
  height: 10rem;

  background-color: #efefef;
`;

const StyledForm = styled.form`
  height: 813px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5vh;
`;

const StyledLongSpan = styled.span`
  width: 12vw;
  float: left;

  font-size: 21px;
`;

const StyledSpan = styled.span`
  float: left;

  font-size: 21px;
`;

const InputSmallDiv = styled.div`
  margin-bottom: 3vh;
  padding: 0;

  width: 40vw;
`;

const StyledSelect = styled.select`
  width: 27.5vw;
  height: 23px;

  float: right;
  text-align: center;

  font-size: 15px;

  background-color: #efefef;
  border: none;
`;

const StyledSelectTwo = styled.select`
  width: 27.5vw;
  height: 23px;

  float: right;
  text-align: center;

  font-size: 15px;

  background-color: #efefef;
  border: none;
`;

const StyledNameInput = styled.input`
  width: 27.5vw;
  height: 23px;

  float: right;
  text-align: center;

  font-size: 15px;

  background-color: #efefef;
  border: none;
  outline: none;
`;

const StyledMemoInput = styled.input`
  width: 27.5vw;
  height: 143px;

  float: right;

  font-size: 15px;

  background-color: #efefef;
  border: none;
  outline: none;
`;

const StyledButton = styled.button`
  width: 15vw;
  height: 25px;

  float: right;

  background-color: #d0bcf2;
  border: 1px solid #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
`;