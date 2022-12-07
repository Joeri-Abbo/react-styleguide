import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { StyledCopyElement } from '../../styles/global';

const TitleText = ({ content, colors }) => {
    const parseText = () => {
        if (content.text !== '') {
            return <StyledText textColor={colors.text}>{ReactHtmlParser(content.text)}</StyledText>;
        }
    };

    return (
        <StyledTitleText>
            <StyledTitle textColor={colors.title}>{content.title}</StyledTitle>
            {parseText()}
        </StyledTitleText>
    );
};

/*
 * Styled Components
 *
 */

const StyledTitleText = styled.div`
    ${StyledCopyElement};
`;

const StyledTitle = styled.h2`
    color: ${props => props.textColor};
    font-size: 18px;
    font-weight: 700;
    line-height: 29px;
`;

const StyledText = styled.div`
    color: ${props => props.textColor};
`;

export default TitleText;
