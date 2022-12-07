import React from 'react';
import { useSpring, animated } from 'react-spring';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const Intro = ({ intro }) => {
    const fadeUp = useSpring({
        from: { transform: 'translateY(10%)', opacity: 0 },
        to: {
            transform: 'translateY(0)',
            opacity: 1,
        },
    });

    return (
        <StyledIntro style={fadeUp}>
            <img src={intro.logo} alt="Logo" />
            <StyledHeading className="u-text-client-font">{intro.title}</StyledHeading>
            <StyledParagraph>{ReactHtmlParser(intro.subtitle)}</StyledParagraph>
        </StyledIntro>
    );
};

/*
 * Styled Components
 *
 */

const StyledIntro = styled(animated.div)`
    margin-right: auto;
    margin-left: auto;
    max-width: 620px;
    text-align: center;
`;

const StyledHeading = styled.h1`
    margin-top: 39px;
    font-size: 28px;
    line-height: 34px;
`;

const StyledParagraph = styled.div`
    margin-top: 13px;
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
`;

export default Intro;
