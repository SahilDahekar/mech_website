/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg-1': "url('https://docs.google.com/uc?id=19bUA7xcC8XzklUPM_zw2SS-QYUcMQn_T')",
        'heroBg-2': "url('https://docs.google.com/uc?id=1JxRbRy-y1mXAvFIfsAWp_tHrLaJ6UdTV')",
        'heroBg-3': "url('https://docs.google.com/uc?id=18s_73ar1y_FzcgVc4FDS1fWPe1Gbf792')",
        'heroBg-4': "url('https://docs.google.com/uc?id=1OdyTQZ540c_SwW4ZKNr2Wunf3Obm14Iu')",
        'AchievementsBg': "url('https://docs.google.com/uc?id=1KN-tvfWd2nVAgUBze7Jup97A_8g7NTkn')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
