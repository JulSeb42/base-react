// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// Data
import NavItems from "../data/NavItems"

// Styles
const Container = styled.header``

function Header() {
    return (
        <Container>
            {NavItems.map((item, i) => (
                <Link to={item.path} key={i}>
                    {item.text}
                </Link>
            ))}
        </Container>
    )
}

export default Header
