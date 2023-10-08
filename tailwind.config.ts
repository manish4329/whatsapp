import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'whatsapp-light': '#F0F2F5',
        'whatsapp-dark': '#242E34',
        'whatsapp-chats-bg': '#131B20',
      },
      backgroundImage: {
        'whatsapp-img-light': './public/whatsapp-login-page-light.png',
        'whatsapp-img-dark': './public/whatsapp-login-page-light.png',
      },
    },
  },
  plugins: [],
}
export default config
