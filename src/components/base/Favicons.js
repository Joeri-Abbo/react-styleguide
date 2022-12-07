import React from 'react';
import { ContentConsumer } from '../../context/ContentContext';
import { Helmet } from 'react-helmet';

const Favicons = () => {
    const getFavicon = (favicons, colors) => {
        if (favicons && colors) {
            return (
                <Helmet>
                    <link rel="apple-touch-icon" href={favicons.apple} />
                    <link rel="icon" href={favicons.icon} />
                    <link rel="mask-icon" href={favicons.pinned} color={colors.menu.background} />
                </Helmet>
            );
        }
    };

    return <ContentConsumer>{({ general }) => getFavicon(general?.favicons, general?.colors)}</ContentConsumer>;
};

export default Favicons;
