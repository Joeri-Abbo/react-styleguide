import React from 'react';
import styled from 'styled-components';
import { size, padding } from 'polished';
import breakpoints from '../../styles/settings/breakpoints';
import { ContentConsumer } from '../../context/ContentContext';

const Message = ({ content }) => {
    const getContent = (logo, colors) => {
        return (
            <StyledMessage background={colors?.background}>
                <img src={logo} alt="Logo" />
                <MessageHeading className="u-text-client-font" textcolor={colors?.title}>
                    {content.heading}
                </MessageHeading>
                <MessageText textcolor={colors?.subtitle}>{content.text}</MessageText>
            </StyledMessage>
        );
    };

    return <ContentConsumer>{({ general }) => getContent(general?.logo, general?.colors.homepage)}</ContentConsumer>;
};

/*
 * Styled Components
 *
 */

const StyledMessage = styled.div`
    ${padding(null, '26px', null, '26px')}
    ${size('100vh', '100%')}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    background-color: ${props => props.background};
    text-align: center;
    color: white;
    z-index: 100;

    ${breakpoints.large} {
        display: none;
    }
`;

const MessageHeading = styled.span`
    display: block;
    margin-top: 39px;
    font-size: 28px;
    line-height: 34px;
    color: ${props => props.textcolor};
`;

const MessageText = styled.p`
    margin-top: 13px;
    max-width: 620px;
    font-size: 24px;
    font-weight: 300;
    line-height: 31px;
    color: ${props => props.textcolor};
`;

export default Message;
