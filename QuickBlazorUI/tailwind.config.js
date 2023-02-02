const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        './wwwroot/index.html',
        './**/*.razor',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'main': '#ffffff',
                'link': '#0000FF',
                primary: {
                    DEFAULT: colors.purple[600],
                    50: colors.purple[50],
                    100: colors.purple[100],
                    200: colors.purple[200],
                    300: colors.purple[300],
                    400: colors.purple[400],
                    500: colors.purple[500],
                    600: colors.purple[600],
                    700: colors.purple[700],
                    800: colors.purple[800],
                    900: colors.purple[900],
                    light: colors.purple[500],
                    lighter: colors.purple[400],
                    dark: colors.purple[700],
                    darker: colors.purple[800]
                },
                secondary: {
                    DEFAULT: colors.gray[600],
                    50: colors.gray[50],
                    100: colors.gray[100],
                    200: colors.gray[200],
                    300: colors.gray[300],
                    400: colors.gray[400],
                    500: colors.gray[500],
                    600: colors.gray[600],
                    700: colors.gray[700],
                    800: colors.gray[800],
                    900: colors.gray[900],
                    light: colors.gray[500],
                    lighter: colors.gray[400],
                    dark: colors.gray[700],
                    darker: colors.gray[800]
                },
                info: {
                    DEFAULT: colors.white[500],
                    50: colors.white[50],
                    100: colors.white[100],
                    200: colors.white[200],
                    300: colors.white[300],
                    400: colors.white[400],
                    500: colors.white[500],
                    600: colors.white[600],
                    700: colors.white[700],
                    800: colors.white[800],
                    900: colors.white[900],
                    light: colors.white[500],
                    lighter: colors.white[400],
                    dark: colors.white[700],
                    darker: colors.white[800]
                },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
