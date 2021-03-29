const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [
        './src/**/*.html',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            darkBackground: '#121212',

            ...colors,

            primary: colors.fuchsia,
            secondary: colors.indigo,
        }
    },
    variants: {},
};
