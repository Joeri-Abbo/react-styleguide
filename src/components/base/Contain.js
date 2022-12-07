import React from 'react';
import styled from 'styled-components';

const Contain = props => {
    const { maxWidth, padding, children } = props;

    const containPadding = () => {
        if (padding === 'normal') {
            return `
                padding-right: var(--contain-percentage);
                padding-left: var(--contain-percentage);
            `;
        }
    };

    const containWidth = () => {
        if (maxWidth) {
            return `
                max-width: 1440px;
                margin-right: auto;
                margin-left: auto;
            `;
        }
    };

    return (
        <StyledContain padding={containPadding()} maxWidth={containWidth()}>
            {children}
        </StyledContain>
    );
};

const StyledContain = styled.div`
    ${props => props.padding};
    ${props => props.maxWidth};
`;

export default Contain;
