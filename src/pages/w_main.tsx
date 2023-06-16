import Link from "next/link";

import styled from "styled-components";
import Nav from "../components/Nav";
import List from "../components/List";
import Grid from "../components/Grid";

import axios from "axios";

export default function W_Main() {
    axios.get('https://skhufp.ddns.net/api/clothes?seasons=winter', {
        headers: {
            Authorization: "Bearer " + (typeof window !== "undefined" ? localStorage.getItem("accessToken") : '')
        }
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(res => {
        console.log(res.data);
    })
    
    return (
        <>
            <StyledS>겨울</StyledS>
            <Nav />
            <Container>
                <List />
                <Grid />
                <Link href="/m_add">
                    <StyledAdd>➕</StyledAdd>
                </Link>
            </Container>
        </>
    )
}

const StyledS = styled.span`
float: right;
margin-top: 1rem;
margin-right: 2rem;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledAdd = styled.button`
width: 4rem;
height: 4rem;

border: none;

background-color: #d0bcf2;
font-size: 1.5rem;
cursor: pointer;
`;