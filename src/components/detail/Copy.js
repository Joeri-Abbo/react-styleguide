import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../styles/settings/breakpoints';
import Layouts from '../layouts/Layouts';
import { ContentConsumer } from '../../context/ContentContext';

const Copy = ({ match }) => {
    const { guide, page } = match.params;

    return (
        <StyledCopy>
            <ContentConsumer>
                {({ general, guides }) => <Layouts content={guides[guide].pages[page].flex} general={general} />}
            </ContentConsumer>
        </StyledCopy>
    );
};

/*
 * Styled Components
 *
 */

const StyledCopy = styled.div`
    position: relative;
    left: 25vw;
    width: calc(75vw - 60px);
    padding: 3.25rem 6%;

    > * + * {
        margin-top: 26px;
    }

    ${breakpoints.wide} {
        left: 20vw;
        width: calc(80vw - 60px);
    }
`;

export default Copy;
