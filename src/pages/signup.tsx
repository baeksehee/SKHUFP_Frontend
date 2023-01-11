import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

// style, components
import styled from "styled-components";
import Logo2 from "../components/Logo2";

import axios from "axios";

const Signup = () => {
    const router = useRouter();
    
    const [username, setUserName] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("http://3.34.215.12:8080/api/auth/sign-up", {
            username: username,
            password: password,
        })
        .then((response) => {
            console.log(response.data);
            router.push('/login');
        })
    }

    return (
        <>
            <Logo2 />
            <Container>
                <form onSubmit={onSubmit}>
                <StyledH1>회원가입</StyledH1>
                    <div>
                        <StyledSpan>아이디</StyledSpan>
                        <StyledInput type="text" onChange={onChangeName} value={username} />
                    </div>
                    <div>
                        <StyledSpan>비밀번호</StyledSpan>
                        <StyledInput type="text" onChange={onChangePassword} value={password} />
                    </div>
                    <div>
                        <StyledSpan>비밀번호 확인</StyledSpan>
                        <StyledInput type="text" />
                    </div>
                    <div>
                        <StyledSpan>전화번호</StyledSpan>
                        <StyledInput type="phonenumber" />
                    </div>
                    <StyledBtn type="submit">가입하기</StyledBtn>
                </form>
            </Container>
        </>
    )
}

export default Signup;

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