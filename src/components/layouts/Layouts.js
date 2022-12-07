import React from 'react';
import Intro from './Intro';
import TitleText from './TitleText';
import Image from './Image';
import Images from './Images';
import Button from './Button';
import Colors from './Colors';

const Layouts = ({ content, general }) => {
    const contentModules = () => {
        let index = 0;
        return Object.values(content).map(item => {
            index += 1;

            switch (item.layout) {
                case 'intro':
                    return <Intro key={index} content={item} colors={general.colors.general} />;
                case 'title_text':
                    return <TitleText key={index} content={item} colors={general.colors.general} />;
                case 'image':
                    return <Image key={index} content={item} />;
                case 'images':
                    return <Images key={index} content={item} />;
                case 'button':
                    return <Button key={index} content={item} colors={general.colors.button} />;
                case 'colors':
                    return <Colors key={index} content={item} />;
                default:
                    return <p key={index}>Content module not found</p>;
            }
        });
    };

    return <>{contentModules()}</>;
};

export default Layouts;
