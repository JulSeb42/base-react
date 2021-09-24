// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// Data
import NavItems from "../data/NavItems"

// Styles
const Nav = styled.nav``

function Header() {
    return (
        <Nav>
            {NavItems.map(({ path, text, index }) => (
                <Link to={path} key={index}>
                    {text}
                </Link>
            ))}
        </Nav>
    )
}

export default Header
