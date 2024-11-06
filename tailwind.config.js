/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'sm': '320px',
            'md': '576px',
            'lg': '744px',
            'xl': '960px',
            '2xl': '1024px',
            '3xl': '1440px',
            '4xl': '2560px',
        },
        extend: {
            boxShadow: {
                'slider': '0 0 200px 0 rgba(0, 0, 0, 0.1)',
            },
            transformOrigin: {
                "0": "0%",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'base': {
                    'strong': '#000000',
                    'weak': '#F5F5F5',
                },
                'smoke': {
                    'strong': '#4D4D4D',
                    'weak': '#CFD5D7',
                },
                'bg': {
                    'strong': '#4D4D4D',
                    'weak': 'rgba(242, 242, 242, 1)',
                },
                'border': {
                    'footer': 'rgba(64, 64, 64, 1)',
                }
            },
            fontSize: {
                'desktop-hero-title-lg': ['189.51px', {
                    lineHeight: '189.51px',
                    fontWeight: '700',
                }],
                'desktop-hero-title': ['120px', {
                    lineHeight: '120px',
                    fontWeight: '700',
                }],
                'desktop-title-lg': ['100px', {
                    lineHeight: '100px',
                    fontWeight: '700',
                }],
                'desktop-title-md': ['80px', {
                    lineHeight: '80px',
                    fontWeight: '700',
                }],
                'desktop-title-sm': ['60px', {
                    lineHeight: '72px',
                    fontWeight: '700',
                }],
                'desktop-subtitle': ['32px', {
                    lineHeight: '38.4px',
                    fontWeight: '600',
                }],
                'desktop-text-lg': ['24px', {
                    lineHeight: '38.4px',
                    fontWeight: '500',
                }],
                'desktop-text-md': ['18px', {
                    lineHeight: '28.8px',
                    fontWeight: '500',
                }],
                'desktop-text-sm': ['14px', {
                    lineHeight: '22.4px',
                    fontWeight: '500',
                }],
                'tablet-text': ['90px', {
                    lineHeight: '90px',
                    fontWeight: '500',
                }],
                'mobile-horizontal': ['92.96px', {
                    lineHeight: '92.96px',
                    fontWeight: '700',
                }],
                'mobile-hero-title': ['48px', {
                    lineHeight: '48px',
                    fontWeight: '700',
                }],
                'mobile-title-lg': ['40px', {
                    lineHeight: '40px',
                    fontWeight: '700',
                }],
                'mobile-title-md': ['36px', {
                    lineHeight: '36px',
                    fontWeight: '700',
                }],
                'mobile-title-sm': ['30px', {
                    lineHeight: '36px',
                    fontWeight: '700',
                }],
                'mobile-subtitle': ['26px', {
                    lineHeight: '31.2px',
                    fontWeight: '600',
                }],
                'mobile-text-lg': ['20px', {
                    lineHeight: '32px',
                    fontWeight: '500',
                }],
                'mobile-text-md': ['16px', {
                    lineHeight: '25.6px',
                    fontWeight: '500',
                }],
                'mobile-text-sm': ['12px', {
                    lineHeight: '19.2px',
                    fontWeight: '500',
                }],
            },
        },
    },
    plugins: [],
};
