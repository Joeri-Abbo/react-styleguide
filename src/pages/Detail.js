import React, { useState, useEffect, useRef } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, useSpring, useChain, animated } from 'react-spring';
import styled from 'styled-components';
import Loader from '../components/base/Loader';
import Navigation from '../components/detail/Navigation';
import Copy from '../components/detail/Copy';
import { ContentConsumer } from '../context/ContentContext';

const Detail = ({ match }) => {
    const [isLoading, setLoading] = useState(true);
    const { guide, page } = match ? match.params : {};

    const location = useLocation();

    const transition = useTransition(isLoading, {
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
    const copyTransition = useTransition(location, {
        ref: copyRef,
        keys: loc => loc.pathname,
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
        if (page) {
            window.scrollTo(0, 0);
            document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} | Styleguide`;
        }
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
                    return <Navigate to='/error' replace />;
                } else {
                    checkData(guides);
                    return transition((style, item) =>
                        item ? (
                            <Loader />
                        ) : (
                            <CopyWrapper style={style}>
                                <Navigation
                                    navGuides={guides}
                                    activeGuide={guide}
                                    activePage={page}
                                    colors={general.colors.menu}
                                    style={{ width: width }}
                                />

                                {copyTransition((transitions, loc) =>
                                    loc && (
                                        <CopyWrapper style={transitions}>
                                            <Routes location={loc}>
                                                <Route path='/guides/:guide/:page' element={<Copy />} />
                                            </Routes>
                                        </CopyWrapper>
                                    )
                                )}
                            </CopyWrapper>
                        )
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
