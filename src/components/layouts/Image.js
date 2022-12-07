import React from 'react';
import styled from 'styled-components';
import { StyledCopyElement, StyledCopySpacingExtraLarge } from '../../styles/global';

const Image = ({ content }) => {
    return (
        <StyledFigure border={content.border} padding={content.padding}>
            <img src={content.image} alt={content.alt} />
        </StyledFigure>
    );
};

/*
 * Styled Components
 *
 */

const StyledFigure = styled.figure`
    ${StyledCopyElement};
    ${StyledCopySpacingExtraLarge};
    padding: ${props => (props.padding ? '19px 26px' : '0')};
    border: ${props => (props.border ? '1px solid rgb(242, 242, 242)' : '0')};

    & + & {
        margin-top: 26px !important;
    }

    img {
        width: 100%;
        vertical-align: bottom;
    }
`;

export default Image;
