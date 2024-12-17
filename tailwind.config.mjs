/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            maskImage: {
                'gradient-black-transparent': 'linear-gradient(black 80%, transparent)',
                'gradient-left-right': 'linear-gradient(to right, transparent, black 80%, transparent)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.mask-gradient-black-transparent': {
                    maskImage: 'linear-gradient(black 75%, transparent)',
                },
                '.mask-gradient-left-right': {
                    maskImage: 'linear-gradient(to right, transparent, black 80%, transparent)',
                },
                '.mask-gradient-all-sides': {
                    maskImage:
                        'linear-gradient(to right, transparent, black 80%, transparent), linear-gradient(black 75%, transparent)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'destination-in',
                },
            });
        },
    ],
};
