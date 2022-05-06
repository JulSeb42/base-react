// Packages
import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

// Data
import siteData from "../../data/siteData"

// Styles
import { Container, NavItem, MenuButton, Nav } from "./styles"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <NavItem as={Link} to="/" logo>
                {siteData.name}
            </NavItem>

            <MenuButton
                width={28}
                height={20}
                onClick={() => setIsOpen(!isOpen)}
                color="currentColor"
                open={isOpen}
            />

            <Nav open={isOpen}>
                <NavItem to="/" as={NavLink}>
                    Homepage
                </NavItem>
            </Nav>
        </Container>
    )
}

export default Header
