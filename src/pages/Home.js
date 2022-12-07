import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useTransition } from 'react-spring';
import styled from 'styled-components';
import Grid from '../components/grid/Grid';
import Contain from '../components/base/Contain';
import Loader from '../components/base/Loader';
import Intro from '../components/home/Intro';
import HomepageCards from '../components/home/Cards';
import { ContentConsumer } from '../context/ContentContext';

const Home = () => {
    const [isLoading, setLoading] = useState(true);

    const transition = useTransition(isLoading, null, {
        from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 },
    });

    const transitionFadeUp = useTransition(!isLoading, null, {
        from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Home | Fivoor Styleguide';
    }, []);

    const checkData = data => {
        if (typeof data !== 'undefined') {
            setLoading(false);
        }
    };

    return (<>
        <ContentConsumer>
            {({ error, homepage, general, guides }) => {
                if (typeof error !== 'undefined' && error.isError) {
                    return <Redirect to='/error' />;
                } else {
                    checkData(homepage);
                    return transition.map(({ item, key, props }) => item ? (
                        <Loader style={props} key={key} />) : (transitionFadeUp.map(({ key }) => (
                        <StyledBackground backgroundcolor={general.colors.homepage.background} key={key}>
                            <StyledHomePage>
                                <Contain maxWidth={true} padding='normal'>
                                    <Intro intro={homepage.intro} />
                                    <StyledCards>
                                        <Grid gutter='tiny'>
                                            <HomepageCards cards={guides} />
                                        </Grid>
                                    </StyledCards>
                                </Contain>
                            </StyledHomePage>
                        </StyledBackground>))));
                }
            }}
        </ContentConsumer>
    </>);
};

/*
 * Styled Components
 *
 */

const StyledBackground = styled.div`
  background-color: ${props => props.backgroundcolor};
  color: white;
`;

const StyledHomePage = styled.div`
  padding-top: 78px;
  padding-bottom: 78px;
`;

const StyledCards = styled.div`
  margin-top: 91px;
`;

export default Home;
