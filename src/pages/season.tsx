import Link from "next/link";

import styled from "styled-components";

const Season = () => {
    return (
        <Container>
            <StyledH1>My<br />Closet</StyledH1>
            <StyledDiv>
                <Link href="/s_main">
                    <StyledBtn>봄</StyledBtn>
                </Link>
                <Link href="/su_main">
                    <StyledBtn>여름</StyledBtn>
                </Link>
            </StyledDiv>
            <StyledDiv>
                <Link href="/f_main">
                    <StyledBtn>가을</StyledBtn>
                </Link>
                <Link href="/w_main">
                    <StyledBtn>겨울</StyledBtn>
                </Link>
            </StyledDiv>
        </Container>
    )
}

export default Season;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-top: 12vh;
`;

const StyledH1 = styled.h1`
font-size: 3rem;
color: #d0bcf2;
`;

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 30%;
`;

const StyledBtn = styled.button`
width: 10vw;
height: 4rem;
margin: 5px;

border: 1px solid #d0bcf2;
border-radius: 5px;
font-size: 1rem;
color: white;
background-color: #d0bcf2;

cursor: pointer;

&:hover{
    color: #d0bcf2;
    background-color: white;
}
`;