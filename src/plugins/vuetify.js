import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { pt } from 'vuetify/locale'
// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  locale: {
    locale: 'pt',
    messages: { pt },
  },
  date: {
    locale: {
      pt_BR: 'pt-BR',
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1F8BDD',
          secondary: '#21C45D',
          'on-secondary': '#FFFFFF', // Cor do texto sobre o fundo secundário
        },
      },

      dark: {
        colors: {
          primary: '#267A7A',
          secondary: '#21C45D',
          'on-secondary': '#FFFFFF', // Cor do texto sobre o fundo secundário
        },
      },
    },
  },
  defaults: {
    global: {
      style: 'text-transform: none;',
    },
  },
})
