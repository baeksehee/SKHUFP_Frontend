import styled from "styled-components";

export default function Logo() {
    return (
        <div>
            <StyledH1>My<br />Closet</StyledH1>
        </div>
    )
}

const StyledH1 = styled.h1`
margin-left: 2rem;

font-size: 2rem;
color: #d0bcf2;
`;