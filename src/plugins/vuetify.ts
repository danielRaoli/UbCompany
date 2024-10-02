/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'themedefault',
    themes: {
      themedefault: {
        dark: false,
        colors: {
          primary: '#43A047',
          secondary: '#2E2E8A'
        }
      }
    },
  }
})
