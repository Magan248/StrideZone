import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      translate: {
        // 108: '27rem', // 432px
        // 128: '32rem', // 512px
        136: '34rem', // 544px
        140: '35rem', // 560px
        144: '36rem', // 576px
        // 160: '40rem', // 640px
        // 200: '50rem', // 800px
      },
      backgroundImage: {
        'testimonial-section': "url('/images/testimonial-bg.svg')",
      },
    },
  },
  plugins: [],
}
