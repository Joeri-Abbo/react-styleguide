import React from 'react';
import WebFont from 'webfontloader';
import { createGlobalStyle } from 'styled-components';
import Page from './settings/page';
import breakpoints from './settings/breakpoints';
import assets from '../resources/images/assets.svg';
import { ContentConsumer } from '../context/ContentContext';

const Fonts = () => {
    const getFonts = fonts => {
        if (fonts) {
            WebFont.load(fonts.families);
        }

        return <GlobalStyle fonts={fonts?.names} />;
    };

    return <ContentConsumer>{({ general }) => getFonts(general?.fonts)}</ContentConsumer>;
};

export default Fonts;

const GlobalStyle = createGlobalStyle`
    :root {
        ${Page}
        ${breakpoints}
    }

    html {
        overflow-y: scroll;
    }

    body {
        min-height: 100%;
        font-size: 16px;
        line-height: 26px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${props =>
            props.fonts
                ? props.fonts.defaultFont.name
                : ''} , 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, ArialMT, sans-serif
    }

    .u-text-client-font {
        font-family: ${props =>
            props.fonts
                ? props.fonts.customFont.name
                : ''}, 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial, ArialMT, sans-serif;;
        font-weight: 600;
    }
`;

export const StyledCopyElement = `
    margin-right: auto;
    margin-left: auto;
    display: block;
    max-width: 720px;
`;

export const StyledCopySpacingExtraLarge = `
    & + * {
        margin-top: 52px !important;
    }
`;

export const BackGroundElement = `
    background-image: url(${assets});
`;
