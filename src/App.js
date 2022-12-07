import React from 'react';
import Router from './Router';
import { ContentProvider } from './context/ContentContext';
import GlobalStyle from './styles/global';
import Favicons from './components/base/Favicons';
import Message from './components/base/Message';

function App() {
    return (
        <ContentProvider>
            <Router />
            <Message
                content={{
                    heading: 'Helaas,',
                    text:
                        'Deze website is niet geopmtimaliseerd voor mobiele schermen, open deze pagina op een groter scherm.',
                }}
            />
            <Favicons />
            <GlobalStyle />
        </ContentProvider>
    );
}

export default App;
