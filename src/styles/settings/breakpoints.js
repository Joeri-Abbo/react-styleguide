// theme.js
const sizes = {
    small: '20em',
    compact: '30em',
    medium: '48em',
    large: '64em',
    wide: '80em',
    huge: '90em',
    mega: '105em',
};

const breakpoints = Object.keys(sizes).reduce((acc, cur) => {
    acc[cur] = `@media (min-width: ${sizes[cur]})`;
    return acc;
}, {});
export default breakpoints;
