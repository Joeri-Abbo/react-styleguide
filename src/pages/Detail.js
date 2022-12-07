import React, { useState, useEffect, useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { __RouterContext } from 'react-router';
import { useTransition, useSpring, useChain, animated } from 'react-spring';
import styled from 'styled-components';
import Loader from '../components/base/Loader';
import Navigation from '../components/detail/Navigation';
import Copy from '../components/detail/Copy';
import { ContentConsumer } from '../context/ContentContext';

const Detail = ({ match }) => {
    const [isLoading, setLoading] = useState(true);
    const { guide, page } = match.params;

    function useRouter() {
        return useContext(__RouterContext);
    }

    const { location } = useRouter();

    const transition = useTransition(isLoading, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const navRef = useRef();

    const navWidth = window.outerWidth >= 1280 ? '20vw' : '25vw';

    const { width } = useSpring({
        ref: navRef,
        from: {
            width: '100vw',
        },
        to: {
            width: navWidth,
        },
    });

    const copyRef = useRef();
    const copyTransition = useTransition(location, location => location.pathname, {
        ref: copyRef,
        from: {
            transform: 'translate3d(0, 200vh, 0)',
        },
        enter: {
            transform: 'translate3d(0, 0, 0)',
        },
        leave: {
            transform: 'translate3d(0, 200vh, 0)',
        },
        config: {
            duration: 460,
        },
    });

    useChain([navRef, copyRef], [0, 0.5]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} | Fivoor Styleguide`; //TODO: Make this dynamic
    }, [page]);

    const checkData = data => {
        if (typeof data !== 'undefined') {
            setLoading(false);
        }
    };

    return (
        <ContentConsumer>
            {({ error, guides, general }) => {
                if (typeof error !== 'undefined' && error.isError) {
                    return <Redirect to='/error' />;
                } else {
                    checkData(guides);
                    return transition.map(({ item, key, props }) =>
                        item ? (
                            <Loader key={key} />
                        ) : (
                            <CopyWrapper key={key} style={props}>
                                <Navigation
                                    navGuides={guides}
                                    activeGuide={guide}
                                    activePage={page}
                                    colors={general.colors.menu}
                                    style={{ width: width }}
                                />

                                {copyTransition.reverse().map(
                                    ({ item, props: transitions, key }) =>
                                        item && (
                                            <CopyWrapper key={key} style={transitions}>
                                                <Switch location={item}>
                                                    <Route exact path='/guides/:guide/:page' component={Copy} />
                                                </Switch>
                                            </CopyWrapper>
                                        ),
                                )}
                            </CopyWrapper>
                        ),
                    );
                }
            }}
        </ContentConsumer>
    );
};

/*
 * Styled Components
 *
 */

const CopyWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
`;
export default Detail;
