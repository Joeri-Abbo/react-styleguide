import React from 'react';
import { animated } from 'react-spring';
import { position, size } from 'polished';
import styled from 'styled-components';
import defaultSettings from '../../resources/json/default-settings.json';

const Loader = ({ style }) => {
    return (
        <StyledLoader backgroundcolor={defaultSettings.backgroundColor}>
            <StyledLoaderImage style={style}>
                <img src={defaultSettings.logo} alt="Logo" />
            </StyledLoaderImage>
        </StyledLoader>
    );
};

const StyledLoader = styled.div`
    ${position('fixed', 0, null, null, 0)}
    ${size('100%', '100%')}
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundcolor};
    z-index: 1000;
`;

const StyledLoaderImage = styled(animated.div)`
    width: 200px;
`;

export default Loader;
