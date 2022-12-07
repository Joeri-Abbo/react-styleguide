import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ content }) => {
    const subPageUrl = Object.values(content.pages)[0].name;
    const url = `/guides/${content.name}/${subPageUrl}`;

    return (
        <StyledCard>
            <Link to={url}>
                <StyledContent>
                    <StyledHeading>{content.title}</StyledHeading>
                    <StyledParagraph>{content.description}</StyledParagraph>
                </StyledContent>

                <StyledFigure>
                    <StyledImage src={content.image} alt={content.title} />
                </StyledFigure>
            </Link>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    margin-bottom: 28px;
    background-color: white;
`;

const StyledContent = styled.div`
    padding: 52px;
`;

const StyledHeading = styled.h2`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: rgb(40, 38, 35);
`;

const StyledParagraph = styled.p`
    margin-top: 7px;
    font-size: 15px;
    line-height: 24px;
    color: rgb(150, 150, 150);
`;

const StyledFigure = styled.figure`
    width: 100%;
`;

const StyledImage = styled.img`
    width: 100%;
    vertical-align: bottom;
`;

export default Card;
