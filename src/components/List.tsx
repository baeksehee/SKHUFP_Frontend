import styled from "styled-components";

export default function List() {
    return(
        <StyledNav>
            전체 | 상의 | 하의 | 아우터 | 신발 | 가방 | 잡화
        </StyledNav>
    )
}

const StyledNav = styled.nav`
cursor: pointer;
`;