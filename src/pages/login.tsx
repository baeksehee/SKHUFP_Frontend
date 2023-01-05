import styled from "styled-components";

export default function Login() {
    return (
        <Container>
            <StyledH1>로그인</StyledH1>
                <span>아이디   </span>
            <StyledDiv>d </StyledDiv>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledH1 = styled.h1`
float: left;
`;

const StyledDiv = styled.div`
border: none;
background-color: #d9d9d9;
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