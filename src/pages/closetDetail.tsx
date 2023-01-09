import styled from "styled-components";

export default function AddCloset() {
  return (
    <Container>
      <StyledForm>
        <StyledH3>수정</StyledH3>
        <ImageDiv></ImageDiv>
        <InputDiv>
          <InputSmallDiv>
            <StyledSpan>계절(복수선택)</StyledSpan>
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
            <StyledSpan>카테고리(택1)</StyledSpan>
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
            <StyledSpan>메모</StyledSpan>
            <StyledMemoInput></StyledMemoInput>
          </InputSmallDiv>
        </InputDiv>
        <StyledButton>수정</StyledButton>
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledH3 = styled.h3`
  font-size: 48px;
`;

const ImageDiv = styled.div`
  margin-left: 12.5vw;
  margin-top: 32px;

  width: 13vw;
  height: 210px;

  background-color: #efefef;
`;

const StyledForm = styled.form`
  width: 40vw;
  height: 813px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5vh;
`;

const StyledSpan = styled.span`
  float: left;

  font-size: 26px;
`;

const InputSmallDiv = styled.div`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 3vh;
  padding: 0;

  width: 40vw;
`;

const StyledSelect = styled.select`
  width: 27.5vw;
  height: 55px;

  float: right;
  text-align: center;

  font-size: 20px;

  background-color: #efefef;
  border: none;
`;

const StyledSelectTwo = styled.select`
  width: 27.5vw;
  height: 55px;

  float: right;
  text-align: center;

  font-size: 20px;

  background-color: #efefef;
  border: none;
`;

const StyledMemoInput = styled.input`
  width: 27.5vw;
  height: 143px;

  float: right;
  text-align: center;

  font-size: 20px;

  background-color: #efefef;
  border: none;
`;

const StyledButton = styled.button`
  width: 140px;
  height: 40px;

  float: right;

  font-size: 24px;

  background-color: #d0bcf2;
  border: none;
`;
