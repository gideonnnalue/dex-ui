import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => {
    console.log(props)
    return {
      html: {
        background: `linear(to-r, green.200, pink.500)`,
      },
    }
  },
};

const colors = {
  brand: {
    50: "#e1eeff",
    100: "#b2cbff",
    200: "#81a8fd",
    300: "#5085fb",
    400: "#2262f9",
    500: "#0c49df",
    600: "#0439af",
    700: "#00287e",
    800: "#00184e",
    900: "#00081f",
  },
};

export default extendTheme({ config, colors, styles });
