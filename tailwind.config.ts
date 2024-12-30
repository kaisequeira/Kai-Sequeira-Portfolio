import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ["class", "class"],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    1: 'rgb(var(--color-acc1))',
                    2: 'rgb(var(--color-acc2))',
                    3: 'rgb(var(--color-acc3))',
                    4: 'rgb(var(--color-acc4))',
                    5: 'rgb(var(--color-acc5))',
                },
                bgr: 'rgb(var(--color-bgr))',
                content: 'rgb(var(--color-content))',
                subtitle: 'rgb(var(--color-subtitle))',
                offwhite: 'rgb(var(--color-offwhite))',
                offblack: 'rgb(var(--color-offblack))',
                overlay: 'rgb(var(--color-overlay))',
                secondary: 'rgb(var(--color-secondary))',
            },
            spacing: {
                '1/5': '20%',
                '1/6': '16.666667%',
                '1/8': '12.5%',
                '1/10': '10%',
                '1/20': '5%',
            },
            lineClamp: {
                8: '8',
                12: '12',
                15: '15',
                20: '20',
            },
            padding: {
                '1/11': '9.090909%',
                '1/14': '7.142857%',
                '1/16': '6.25%',
                '1/20': '5%',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-acc1': 'var(--gradient-acc1)',
                'gradient-acc2': 'var(--gradient-acc2)',
                'gradient-acc3': 'var(--gradient-acc3)',
                'gradient-acc4': 'var(--gradient-acc4)',
            },
            fontSize: {
                '9xl': '7rem',
                '10xl': '8rem',
            },
            scale: {
                '400': '4',
            },
            borderRadius: {
                '5xl': '5rem',
            },
            boxShadow: {
                thick: '15px 15px 15px rgba(0, 0, 0, 0.5)',
            },
        },
        screens: {
            xs: '400px',
            sm: '640px',
            md: '769px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            small: { raw: '(min-height: 500px)' },
            medium: { raw: '(min-height: 610px)' },
            tall: { raw: '(min-height: 920px)' },
        },
    },
    plugins: [],
}
export default config
