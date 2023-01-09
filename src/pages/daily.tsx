import Link from "next/link";
import styled from "styled-components";
import Nav from "../components/Nav";

export default function Daily() {
    return (
        <>
            <Nav />
            <Container>
                <StyledH1>데일리룩 목록</StyledH1>
                <Container2>
                    <StyledGrid>
                        <Item />
                        <Item />
                        <Item />
                        <StyledName>운동복</StyledName>
                        <StyledName>평상복</StyledName>
                        <StyledName>최애옷</StyledName>
                    </StyledGrid>
                    <StyledGrid>
                        <Item />
                        <Item />
                        <Item />
                        <StyledName>데이트룩</StyledName>
                        <StyledName>자주 입는 옷</StyledName>
                        <StyledName>잘 때 입는 옷</StyledName>
                    </StyledGrid>
                </Container2>
                <Link href="/d_add">
                    <StyledAdd>➕</StyledAdd>
                </Link>
            </Container>
        </>
    )
}

const StyledH1 = styled.h1`
margin-right: 30%;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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

const StyledAdd = styled.button`
width: 4rem;
height: 4rem;

border: none;

background-color: #d0bcf2;
font-size: 1.5rem;
cursor: pointer;
`;