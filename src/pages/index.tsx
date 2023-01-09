import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <StyledH1>My<br />Closet</StyledH1>
      <Link href="/login">
        <StyledBtn>로그인</StyledBtn>
      </Link>
      <Link href="/signup">
        <StyledBtn2>회원가입</StyledBtn2>
      </Link>
    </ Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 20vh;
`;

const StyledH1 = styled.h1`
font-size: 3rem;
color: #d0bcf2;
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

const StyledBtn2 = styled.button`
width: 15vw;
height: 25px;
margin-top: 1rem;

border: 1px solid #d9d9d9;

background-color: #d9d9d9;
cursor: pointer;

&:hover {
  background-color: white;
}
`;