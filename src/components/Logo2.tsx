import Link from "next/link";

import styled from "styled-components";

export default function Logo2() {
    return (
        <div>
            <Link href="/" style={{ textDecoration: "none" }}>
                <StyledH1>My<br />Closet</StyledH1>
            </Link>
        </div>
    )
}

const StyledH1 = styled.h1`
margin-left: 2rem;
font-size: 2rem;
color: #d0bcf2;
`;