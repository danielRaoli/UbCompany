/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "themedefault",
    themes: {
      themedefault: {
        dark: false,
        colors: {
          primary: "#FFA500",
          secondary: "#2E2E8A",
        },
      },
    },
  },
  defaults: {
    global: {
      font: {
        family: "Poppins, sans-serif", // Define a fonte Poppins como padrão
      },
    },
  },
});
