// Packages
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav``;

const Links = [
    {
        path: "/",
        text: "Home",
    },
];

function Header() {
    return (
        <Nav>
            {Links.map(({ path, text, index }) => (
                <Link to={path} key={index}>
                    {text}
                </Link>
            ))}
        </Nav>
    );
}

export default Header;
