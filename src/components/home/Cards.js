import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import GridCell from '../../components/grid/GridCell';
import Card from '../../components/home/Card.js';

const Cards = props => {
    const [leftCards] = useState(Object.values(props.cards).filter((a, i) => !(i % 2)));
    const [rightCards] = useState(Object.values(props.cards).filter((a, i) => i % 2));

    const fadeUp = useSpring({
        from: { transform: 'translateY(10%)', opacity: 0 },
        transform: 'translateY(0)',
        opacity: 1,
    });

    const parseCards = cards => {
        return cards.map((content, key) => {
            return (
                <animated.div style={fadeUp} key={key}>
                    <Card content={content} />
                </animated.div>
            );
        });
    };

    return (
        <>
            <GridCell cellSizes={{ small: '100%', medium: '50%' }}>{parseCards(leftCards)}</GridCell>

            <GridCell cellSizes={{ small: '100%', medium: '50%' }}>
                <StyledGridSpacing>{parseCards(rightCards)}</StyledGridSpacing>
            </GridCell>
        </>
    );
};

const StyledGridSpacing = styled.div`
    margin-top: 52px;
`;

export default Cards;
