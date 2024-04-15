import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
const customDarkTheme = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "#03dac6",
    grey:"#9e9e9e",
    error: "#ff5722",
  },
};

const customLightTheme = {
  dark: false,
  colors: {
    background: "#eee",
    surface: "#eee",
    primary: "#3f51b5",
    grey:"#9e9e9e",
    secondary: "#00ccff",
    error: "#ffcc00",
  },
};

export default createVuetify({
  display: {
    thresholds: {
        xs: 360,
        sm: 550,
        md: 768,
        lg: 992,
        xl: 1280,
        xxl: 1920,
    },
},
  theme: {
    defaultTheme: "light",
    themes: {
      customDarkTheme,
      customLightTheme,
    },
  },
});