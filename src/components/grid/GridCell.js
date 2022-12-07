import React from 'react';
import styled from 'styled-components';
import { GutterConsumer } from './Grid';
import breakpoints from '../../styles/settings/breakpoints';

const GridCell = props => {
    const { verticalAlign, cellSizes, children } = props;

    const cellSize = () => {
        let sizeString = 'flex: 1';

        if (cellSizes) {
            sizeString = 'flex: none;';
            Object.keys(cellSizes).forEach(item => {
                sizeString += `${breakpoints[item]} { width: ${cellSizes[item]} }`;
            });
        }

        return sizeString;
    };

    return (
        <GutterConsumer>
            {value => {
                return (
                    <GridCellElement verticalAlign={verticalAlign} gutter={value} size={cellSize()}>
                        {children}
                    </GridCellElement>
                );
            }}
        </GutterConsumer>
    );
};

/*
 * Styled Components
 *
 */

const GridCellElement = styled.div`
    ${props => props.size}
    align-self: ${props => props.verticalAlign};
    padding-right: ${props => props.gutter};
    padding-left: ${props => props.gutter};
`;

export default GridCell;
