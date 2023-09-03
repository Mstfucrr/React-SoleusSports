/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark' : '#1F2937',
        'dark-100' : '#4B5563',
        'dark-200' : '#6B7280',
        'dark-300' : '#9CA3AF',
        'dark-400' : '#D1D5DB',
        'dark-500' : '#E5E7EB',
        'dark-600' : '#F3F4F6',
        'dark-700' : '#F9FAFB',
        'dark-800' : '#F9FAFB',
        'dark-900' : '#F9FAFB',
        'soleus-green-900' : '#BDEE6F',
        'soleus-green-800' : '#D9F8A8',
        'soleus-green-700' : '#EAFCD5',
        'soleus-green-600' : '#F2FDEB',
        'soleus-green-500' : '#F9FEF6',
        'soleus-green-400' : '#FBFEF9',
        'soleus-green-300' : '#FEFEFE',
        'soleus-green-200' : '#FEFEFE',
        'soleus-green-100' : '#FEFEFE',
        'soleus-green' : '#9BCA40',
        'soleus-dark-green' : '#6B7280',
        'soleus-grey' : "#202520",
        'soleus-dark-grey': "#223024",


        
      },
      backgroundImage: () => ({
        'hero-pattern': "url('/src/assets/images/hero-pattern.jpg')",
        'footer-texture': "url('/src/assets/images/footer-texture.png')",
        'map': "url('https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=tr&region=TR&markers=color:0xdb5e5e|37.7497907,29.0588808&zoom=16&client=google-presto&signature=iZCOxEiC6MfJgyfV-mkj6ys0ir0')"
        })
    },
  },
  plugins: [],
}

