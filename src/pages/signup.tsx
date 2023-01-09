import Link from "next/link";
import styled from "styled-components";
import Logo2 from "../components/Logo2";

export default function Signup() {
    return (
        <>
        <Logo2 />
        <Container>
            <StyledH1>회원가입</StyledH1>
            <div>
                <div>
                    <StyledSpan>아이디</StyledSpan>
                    <StyledInput type="text" />
                </div>
                <div>
                    <StyledSpan>비밀번호</StyledSpan>
                    <StyledInput type="password" />
                </div>
                <div>
                    <StyledSpan>비밀번호 확인</StyledSpan>
                    <StyledInput type="password" />
                </div>
                <div>
                    <StyledSpan>전화번호</StyledSpan>
                    <StyledInput type="phonenumber" />
                </div>
            </div>
            <Link href="/season">
                <StyledBtn>가입하기</StyledBtn>
            </Link>
        </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 6vh;
`;

const StyledH1 = styled.h1`
margin-right: 20vw;
`;

const StyledInput = styled.input`
width: 15vw;
height: 23px;
margin-top: 1rem;
float: right;

border: none;
background-color: #efefef;
outline: none;

`;

const StyledSpan = styled.span`
margin-right: 2rem;
margin-top: 1rem;
float: left;

font-size: 21px;
`;

const StyledBtn = styled.button`
width: 15vw;
height: 25px;
margin-top: 2rem;

border: 1px solid #d0bcf2;

background-color: #d0bcf2;
cursor: pointer;

&:hover {
  color: #d0bcf2;
  background-color: white;
}
`;