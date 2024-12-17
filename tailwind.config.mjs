/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            maskImage: {
                'gradient-black-transparent': 'linear-gradient(black 80%, transparent)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.mask-gradient-black-transparent': {
                    maskImage: 'linear-gradient(black 60%, transparent)',
                },
            });
        },
    ],
}