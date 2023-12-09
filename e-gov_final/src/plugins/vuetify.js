// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    iconfont: 'fa' || 'md',
  },
  theme: {
    themes: {
      light: {
        colors:{
          
          primary: '#1867C0',
          secondary: '#5CBBF6',
          'blue-grey-darken-4': '#072a36',
          'teal-darken-1': '#004D40',
          'teal': '#009688',
          'teal-accent-4': '#00BFA5',
        }
      },
      dark: {
        colors:{
          background: '#151F39', //dark blue
          primary: '#1867C0',
          secondary: '#5CBBF6',
          'blue-grey-darken-4': '#1B2A47',
          'teal-darken-4': '#00BFA5',
          'teal': '#1B2A47', //blue
          'teal-accent-4': '#009688',
          'white': '1B2A47',
        }
      }
    }
  }
})
