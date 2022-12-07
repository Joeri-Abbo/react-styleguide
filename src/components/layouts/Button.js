import React from 'react';
import styled from 'styled-components';
import { StyledCopyElement } from '../../styles/global';

const Button = ({ content, colors }) => {
    const isRelExternal = () => {
        return content.external ? 'external' : 'internal';
    };

    const handleClick = event => {
        const relValue = event.currentTarget.getAttribute('rel');

        if (relValue === 'external') {
            event.preventDefault();
            window.open(event.currentTarget.getAttribute('href'));
        }
    };

    return (
        <ButtonWrapper>
            <StyledButton
                href={content.url}
                title={content.label}
                rel={isRelExternal()}
                onClick={handleClick}
                backgroundColor={colors.background}
                textColor={colors.text}
            >
                {content.label}
            </StyledButton>
        </ButtonWrapper>
    );
};

/*
 * Styled Components
 *
 */

const ButtonWrapper = styled.div`
    ${StyledCopyElement};
`;

const StyledButton = styled.a`
    display: inline-block;
    position: relative;
    padding: 0.8125rem 2.4375rem;
    border: 0;
    border-radius: 3px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    font-weight: 700;
    line-height: inherit;
    cursor: pointer;
`;

export default Button;
