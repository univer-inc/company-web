import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// https://github.com/tailwindlabs/tailwindcss/discussions/9681
const spacing = {
  'small-base': '375px',
  content: '1024px',
  'content-wide': '1400px',
};

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // extend: {},
    colors: {
      orange: '#f3b22a',
      black: '#000000',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      roboto: ['Roboto'],
    },
    // Desktop first
    // https://gist.github.com/heytulsiprasad/e8bae1eba7b90ef66b8b1b1ae0861d96
    screens: {
      xxl: { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      content: { max: '1400px' },
      // => @media (max-width: 1400px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.25rem' }], //10px
        sm: ['0.875rem', { lineHeight: '1.5rem' }], // 12px
        base: ['1rem', { lineHeight: '2rem' }], // 16px
        '2xl': ['1.5rem', { lineHeight: '2.5rem' }], // 24px
        '3xl': ['2rem', { lineHeight: '2.25rem' }], // 32px
        '4xl': ['3rem', { lineHeight: '4rem' }], // 48px
      },
      spacing,
      maxWidth: spacing,
      minWidth: spacing,
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
      },
      // https://voidism.net/metallicratio/
      aspectRatio: {
        '4/3': '4 / 3',
        golden: '1.618 / 1',
        silver: '1.414 / 1',
        bronze: '3.303 / 1',
        platinum: '1.732 / 1',
      },
      letterSpacing: {
        'x-widest': '.15em',
        'xx-widest': '.2em',
        'xxx-widest': '.3em',
        'xxxx-widest': '.4em',
        'xxxxx-widest': '.5em',
      },
      // keyframes: {
      //   marquee: {
      //     "0%": {
      //       transform: "translateX(0)",
      //     },
      //     "100%": {
      //       transform: "translateX(100vw)",
      //     },
      //   },
      // },
      transitionTimingFunction: {
        // https://ics.media/entry/18730/
        // Sine（最も弱い
        'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
        // Quad（弱め。Sineより強く、Cubicより弱い）
        'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        // Cubic（Quadより強く、Quartより弱い）
        'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        // Quart（Cubicより強く、Quintより弱い）
        'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        // Quint（Quartより強く、Expoより弱い）
        'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
        // Expo（最も強い）
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        // Circ（Expoのような強さを持つが、加速や減速の時間がよりゆるやか。）
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        // Back（少し行き過ぎてから戻ってくるような動き）
        'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },

  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      });
    }),
  ],
  important: true,
};

export default config;
