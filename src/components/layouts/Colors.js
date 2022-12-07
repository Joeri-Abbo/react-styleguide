import React from 'react';
import styled from 'styled-components';
import { StyledCopyElement } from '../../styles/global';
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';

const Colors = ({ content }) => {
    const parseColorValue = colors => {
        return colors.map(item => {
            return (
                <ColorSpec key={item.type}>
                    {item.type} | {item.color}
                </ColorSpec>
            );
        });
    };

    const parseColors = () => {
        return content.colors.map((item, index) => {
            return (
                <GridCell
                    key={index + item.title}
                    cellSizes={{ small: '100%', medium: '50%', large: `${(1 / 3) * 100}%` }}
                >
                    <ColorWrapper>
                        <ColorItem>
                            <ColorBackground color={item.block} />
                            <ColorContent>
                                <ColorHeading className="c-heading u-text-size-epsilon">{item.title}</ColorHeading>
                                <ul>{parseColorValue(item.colors)}</ul>
                            </ColorContent>
                        </ColorItem>
                    </ColorWrapper>
                </GridCell>
            );
        });
    };

    return (
        <StyledColors>
            <Grid gutter="tiny">{parseColors()}</Grid>
        </StyledColors>
    );
};

/*
 * Styled Components
 *
 */

const StyledColors = styled.div`
    ${StyledCopyElement};
`;

const ColorWrapper = styled.div`
    padding-bottom: 26px;
    height: 100%;
`;

const ColorItem = styled.div`
    height: 100%;
    border: 1px solid #f2f2f2;
`;

const ColorBackground = styled.div`
    padding-bottom: 76%;
    background-color: ${props => props.color};
`;

const ColorContent = styled.div`
    padding: 0.8125rem 1.015625rem;
    border-top: 1px solid #f2f2f2;
    font-size: 15px;
    line-height: 24px;
`;

const ColorHeading = styled.h3`
    font-weight: 700;
`;

const ColorSpec = styled.li`
    display: block;
    color: rgb(150, 150, 150);
`;

export default Colors;
