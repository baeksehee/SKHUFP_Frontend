import styled from "styled-components";

export default function List() {
    return(
        <StyledNav>
            <StyledBtn>전체</StyledBtn>
            |
            <StyledBtn>상의</StyledBtn>
            |
            <StyledBtn>하의</StyledBtn>
            |
            <StyledBtn>아우터</StyledBtn>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
cursor: pointer;
`;

const StyledBtn = styled.button`
margin: 0 0.5rem;
border: 1px solid #d0bcf2;
border-radius: 10px;
background-color: #d0bcf2;
cursor: pointer;

transition: 0.2s;

&:hover {
    transform: translateY(-2px);
}
`;