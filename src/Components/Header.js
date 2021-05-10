// Packages
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Nav = styled.nav`
    
`

function Header() {
    return (
        <Nav>
            <Link to="/">Home</Link>
        </Nav>
    );
};

export default Header;
