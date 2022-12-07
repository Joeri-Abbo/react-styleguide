import React, { createContext } from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/settings/breakpoints';

const GutterContext = createContext();

const Grid = props => {
    const { gutter, gridSizes, reverse, children } = props;

    const gridSize = () => {
        let sizeString = '';

        if (gridSizes) {
            sizeString += 'flex: none;';
            Object.keys(gridSizes).forEach(item => {
                sizeString += `${breakpoints[item]} { width: ${gridSizes[item]} }`;
            });
        }

        return sizeString;
    };

    const calcGutter = () => {
        if (gutter === 'normal') {
            return '20px';
        } else if(gutter === 'tiny') {
            return '14px';
        }
    };

    const reverseCell = () => {
        if (reverse) {
            return `${breakpoints.large} { &:first-child { order: 1; }}`;
        }
    };

    return (
        /*
         * Example usage of Grid.
         * <Grid gutter="normal" gridSizes={{ small: '100%', medium: '50%', large: `${(1 / 3*100)}%`, wide: '25%' }}>
         *
         */
        <GridElement gutter={calcGutter()} size={gridSize()} reverse={reverseCell()}>
            <GutterContext.Provider value={calcGutter()}>{children}</GutterContext.Provider>
        </GridElement>
    );
};

/*
 * Styled Components
 *
 */

const GridElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -${props => props.gutter};
    margin-left: -${props => props.gutter};

    > div {
        ${props => props.size}
        ${props => props.reverse};
    }
`;

export const GutterConsumer = GutterContext.Consumer;
export default Grid;
