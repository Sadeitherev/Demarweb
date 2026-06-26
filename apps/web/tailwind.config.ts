import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        demar: {
          navy: '#071A3D',
          blue: '#123C73',
          steel: '#8B98A8',
          frost: '#EAF1F8',
        },
      },
      boxShadow: {
        premium: '0 34px 110px rgba(0, 0, 0, 0.34)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.22)',
      },
      backgroundImage: {
        'steel-grid': 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
