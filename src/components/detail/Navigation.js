import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { position, hideText, size } from 'polished';
import styled from 'styled-components';
import Hamburger from '../../components/base/Hamburger';
import { BackGroundElement } from '../../styles/global';

const Navigation = ({ navGuides, activeGuide, activePage, colors, style }) => {
    const [visible, setVisible] = useState(false);
    const guideData = navGuides[activeGuide];
    const slideIn = useSpring({
        transform: visible ? 'translateX(0)' : 'translateX(-100%)',
    });

    const parseMainItems = () => {
        return Object.values(navGuides).map((item) => {
            const subPageUrl = Object.values(item.pages)[0].name;
            const url = `/guides/${item.name}/${subPageUrl}`;

            return (
                <li key={item.name}>
                    <StyledNavLink onClick={toggleNav} to={url}>
                        {ReactHtmlParser(item.title)}
                    </StyledNavLink>
                </li>
            );
        });
    };

    const parseSubItems = () => {
        return Object.values(guideData.pages).map((item) => {
            const path = `/guides/${activeGuide}/${item.name}`;
            const url = `${window.location.origin}${path}`;
            const active = url === window.location.href;

            return (
                <li key={item.id}>
                    <StyledNavLink active={active} to={path} color={colors.link} activecolor={colors.item_active}>
                        {ReactHtmlParser(item.title)}
                    </StyledNavLink>
                </li>
            );
        });
    };

    const toggleNav = () => {
        setVisible(!visible);
    };

    return (
        <StyledHeader style={style}>
            <MainNav style={slideIn} background={colors.background}>
                <ul>{parseMainItems()}</ul>
            </MainNav>

            <VerticalHeader background={colors.background}>
                <NavList>
                    <li className="o-nav__item">
                        <StyledHomeLink to="/" color={colors.dark ? 1 : 0}>
                            Home
                        </StyledHomeLink>
                    </li>

                    <li className="o-nav__item">
                        <Hamburger clickEvent={toggleNav} menuOpen={visible} color={colors.dark ? 1 : 0} />
                    </li>
                </NavList>
            </VerticalHeader>

            <SubNav background={colors.secondary_background}>
                <ul className="o-list-plain o-nav__list">
                    <li className="o-nav__item">
                        <StyledNavHeading>{ReactHtmlParser(guideData.name)}</StyledNavHeading>
                    </li>
                    {parseSubItems()}
                </ul>
            </SubNav>
        </StyledHeader>
    );
};

/*
 * Styled Components
 *
 */

const StyledHeader = styled(animated.div)`
    ${position('fixed', 0, null, null, 0)}
    z-index: 100;

    li {
        position: relative;
        width: 100%;
    }
`;

const VerticalHeader = styled.div`
    ${position('absolute', 0, null, null, null)}
    ${size('100vh', '20%')};
    display: flex;
    justify-content: center;
    padding-top: 2.03125rem;
    background-color: ${(props) => props.background};
    float: left;
    overflow: hidden;
    z-index: 2;
`;

const NavList = styled.ul`
    width: 100%;
`;

const SubNav = styled.nav`
    ${position('absolute', 0, null, null, '20%')}
    ${size('100vh', '90%')};
    padding-top: 2.4375rem;
    padding-right: 1.625rem;
    padding-left: 0.8125rem;
    float: left;
    background-color: ${(props) => props.background};
    font-weight: 700;
    color: rgb(150, 150, 150);
`;

const StyledNavLink = styled(({ active, ...props }) => <Link {...props} />)`
    display: block;
    padding: 0.203125rem 0.8125rem;
    font-weight: 700;
    border-radius: 2px;
    color: ${(props) => (props.active ? props.activecolor : props.color)};
    transition: background-color 0.24s ease-in;
`;

const MainNav = styled(animated.div)`
    ${position('absolute', 0, null, null, '20%')}
    ${size('100vh', '80%')};
    padding-top: 2.4375rem;
    padding-right: 1.625rem;
    padding-left: 0.8125rem;
    float: left;
    font-weight: 700;
    background-color: ${(props) => props.background};
    ${'' /* Make this dynamic?*/}
    color: white;
    z-index: 1;

    ${StyledNavLink} {
        color: white;
    }
`;

const StyledHomeLink = styled(Link)`
    ${hideText()};
    ${size('50px', '100%')};
    display: block;
    position: relative;
    margin-bottom: 1.625rem;

    &::after {
        ${BackGroundElement};
        ${position('absolute', '50%', null, null, '50%')};
        ${size('20px', '21px')};
        transform: translate(-50%, -50%);
        background-position: ${(props) => (props.color ? '0 -96px' : '0 0')};
        content: '';
    }
`;

const StyledNavHeading = styled.h3`
    margin-bottom: 1.21875rem;
    padding: 0.203125rem 0.8125rem;
    font-size: 0.9375rem;
    color: black;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export default Navigation;
