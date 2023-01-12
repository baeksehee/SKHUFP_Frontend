import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

import styled from "styled-components";
import Logo2 from "../components/Logo2";

import axios from "axios";

const Login = () => {
    const router = useRouter();

    const [nameData, setNameData] = useState<string>("");

    const [pwData, setPwData] = useState<string>("");

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setNameData(e.target.value);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPwData(e.target.value);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nameData === "" || pwData === "") {
            alert("아이디와 비밀번호를 입력해 주세요.");
        } else {
            axios
                .post("/login", {
                    username: nameData,
                    password: pwData,
                })
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem("accessToken", response.data.accessToken);

                    router.push("/season");
                })
                .catch((e) => {
                    console.log(e);
                    alert(
                        "아이디 혹은 비밀번호를 맞게 입력해 주세요."
                    );
                });
        }
    };

    return (
        <>
            <Logo2 />
            <Container>
                <StyledForm onSubmit={onSubmit}>
                    <StyledH1>로그인</StyledH1>
                    <div>
                        <div>
                            <StyledSpan>아이디</StyledSpan>
                            <StyledInput type="text" onChange={onChangeName}
                                value={nameData} />
                        </div>
                        <div>
                            <StyledSpan>비밀번호</StyledSpan>
                            <StyledInput type="password" onChange={onChangePassword}
                                value={pwData} />
                        </div>
                    </div>
                    <StyledBtn type="submit">로그인하기</StyledBtn>
                </StyledForm>
            </Container>
        </>
    )
}

export default Login;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 12vh;
`;

const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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