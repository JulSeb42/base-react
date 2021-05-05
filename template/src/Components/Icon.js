import styled, { css } from "styled-components";
import { ReactSVG } from "react-svg";

const IconStyled = styled(ReactSVG)`
    display: flex;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};

    svg {
        fill: black;
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${(props) => `var(--color-${props.color}-rgba)`};
    }
`;

export default function Icon(props) {
    return (
        <IconStyled
            src={`/images/icons/${props.name}.svg`}
            color={props.color}
            size={props.size}
            {...props}
        />
    );
}

// How to use
// Import in the file you want to use this component
// import Icon from "/path/to/Icon.js"
// Use the component
// <Icon name="name-of-icon" size={32} color="color" />
