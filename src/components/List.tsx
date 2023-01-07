import styled from "styled-components";

export default function List() {
    return(
        <StyledNav>
            전체 | 상의 | 하의 | 아우터
        </StyledNav>
    )
}

const StyledNav = styled.nav`
cursor: pointer;
`;