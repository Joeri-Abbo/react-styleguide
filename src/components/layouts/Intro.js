import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { StyledCopyElement, StyledCopySpacingExtraLarge } from '../../styles/global';

const Intro = ({ content, colors }) => {
    return (
        <StyledIntro>
            <StyledIntroHeading className="u-text-client-font" textColor={colors.title}>
                {content.title}
            </StyledIntroHeading>
            <StyledIntroText textColor={colors.subtitle}>{ReactHtmlParser(content.intro)}</StyledIntroText>
        </StyledIntro>
    );
};

/*
 * Styled Components
 *
 */

const StyledIntro = styled.div`
    ${StyledCopyElement};
    ${StyledCopySpacingExtraLarge};
`;

const StyledIntroHeading = styled.h1`
    color: ${props => props.textColor};
    font-size: 32px;
    line-height: 39px;
`;

const StyledIntroText = styled.div`
    margin-top: 13px;
    color: ${props => props.textColor};
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
`;

export default Intro;
