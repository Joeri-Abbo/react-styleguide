import React from 'react';
import styled from 'styled-components';
import Grid from '../../components/grid/Grid';
import GridCell from '../../components/grid/GridCell';
import { StyledCopyElement, StyledCopySpacingExtraLarge } from '../../styles/global';
import Image from './Image';

const Images = ({ content }) => {
    const parseImages = () => {
        return Object.values(content.images).map((item, key) => {
            return (
                <GridCell key={item.image + key} cellSizes={{ small: '100%', medium: '50%' }}>
                    <Image content={item} />
                </GridCell>
            );
        });
    };

    return (
        <StyledContent>
            <Grid gutter="tiny">{parseImages()}</Grid>
        </StyledContent>
    );
};

/*
 * Styled Components
 *
 */

const StyledContent = styled.div`
    ${StyledCopyElement};
    ${StyledCopySpacingExtraLarge};

    & + & {
        margin-top: 26px !important;
    }
`;

export default Images;
