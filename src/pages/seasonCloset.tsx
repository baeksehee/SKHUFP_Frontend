import styled from "styled-components";

export default function Season() {
  return (
    <Container>
      <StyledH1>
        My
        <br />
        Closet
      </StyledH1>
      <SeasonBox>
        <SpringButton>봄</SpringButton>
        <SummerButton>여름</SummerButton>
        <AutumnButton>가을</AutumnButton>
        <WinterButton>겨울</WinterButton>
        <EtcButton>기타</EtcButton>
      </SeasonBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 15vh;
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  color: #d0bcf2;
`;

const SeasonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vh 1vw;

  width: 28vw;
  height: 20vh;
`;
const SpringButton = styled.button`
  width: 13vw;
  height: 12vh;

  border: 1px solid #d0bcf2;
  border-radius: 8px;

  background-color: #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
  color: white;
  font-size: 22px;
`;

const SummerButton = styled.button`
  width: 13vw;
  height: 12vh;

  border: 1px solid #d0bcf2;
  border-radius: 8px;

  background-color: #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
  color: white;
  font-size: 22px;
`;

const AutumnButton = styled.button`
  width: 13vw;
  height: 12vh;

  border: 1px solid #d0bcf2;
  border-radius: 8px;

  background-color: #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
  color: white;
  font-size: 22px;
`;

const WinterButton = styled.button`
  width: 13vw;
  height: 12vh;

  border: 1px solid #d0bcf2;
  border-radius: 8px;

  background-color: #d0bcf2;
  cursor: pointer;

  &:hover {
    color: #d0bcf2;
    background-color: white;
  }
  color: white;
  font-size: 22px;
`;

const EtcButton = styled.button`
  width: 27vw;
  height: 7vh;

  border: 1px solid #d9d9d9;
  border-radius: 8px;

  background-color: #d9d9d9;
  cursor: pointer;

  &:hover {
    color: #d9d9d9;
    background-color: white;
  }
  color: white;
  font-size: 22px;
`;
