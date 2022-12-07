import React from 'react';
import styled from 'styled-components';
import { position, size } from 'polished';

const Hamburger = ({ clickEvent, menuOpen, color }) => {
    return (
        <StyledHamburger onClick={clickEvent} menuOpen={menuOpen} color={color}>
            <span />
        </StyledHamburger>
    );
};

const StyledHamburger = styled.div`
    ${position('absolute', '50%', null, null, '50%')};
    ${size('54px', '54px')};
    display: block;
    transform: translate(-23%, -55%);
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    z-index: $layer-1;

    &:focus {
        outline: 0;
    }

    span,
    span::before,
    span::after {
        ${position('absolute', null, null, null, null)};
        ${size('3px', '25px')};
        display: block;
        transition: all 0.32s ease-in;
        transition-property: transform, top, opacity;
        background-color: ${props => (props.color ? 'black' : 'white')};
    }

    span {
        top: 24px;
        transform: ${props => (props.menuOpen ? 'rotate(-45deg);' : 'rotate(0);')};
    }

    span::before,
    span::after {
        content: '';
    }

    span::before {
        top: -8px;
        opacity: ${props => (props.menuOpen ? 0 : 1)};
    }

    span::after {
        top: ${props => (props.menuOpen ? '0' : '8px')};
        transform: ${props => (props.menuOpen ? 'rotate(90deg)' : 'rotate(0)')};
    }
`;

export default Hamburger;
