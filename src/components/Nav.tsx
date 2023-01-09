import Link from "next/link";
import styled from "styled-components";
import Logo from "./Logo";

export default function Nav() {
    return (
        <>
            <Logo />
            <StyledNav>
                <Link href="/season">
                    <StyledBtn>옷 등록</StyledBtn>
                </Link>
                <br />
                <Link href="/daily">
                    <StyledBtn>데일리룩</StyledBtn>
                </Link>
                <br />
                <Link href="/d_add">
                    <StyledBtn>데일리룩 등록</StyledBtn>
                </Link>
            </StyledNav>
        </>
    )
}

const StyledNav = styled.nav`
position: fixed;
top: 8rem;
margin-left: 2rem;
`;

const StyledBtn = styled.button`
width: 15vw;
height: 30px;
margin-bottom: 1rem;
border: 1px solid #d0bcf2;
color: white;
background-color: #d0bcf2;
cursor: pointer;
&:hover {
    color: #d0bcf2;
    background-color: white;
}
`;