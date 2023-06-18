import { extendTheme, type ThemeConfig, StyleConfig } from "@chakra-ui/react";
import type {
  StyleFunctionProps,
  CustomThemeTypings,
} from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: () => {
    return {
      html: {
        background: `linear(to-r, green.200, pink.500)`,
      },
    };
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

const components: Record<string, StyleConfig> = {
  Button: {
    variants: {
      "swap-btn": (props: StyleFunctionProps) => {
        console.log(props)
        const { solid } = props.theme.components.Button.variants;
        return {
          ...solid(props),
          color: "brand.200",
          bg: "rgba(76, 130, 251, 0.34)",
          // borderRadius: 1000,
          padding: "10px 12px",
          fontSize: 16,
          _hover: {
            ...solid(props)._hover,
            bg: "rgba(76, 130, 251, 0.24);",
          },
        };
      },
    },
  },
};

const customConfig: CustomThemeTypings = { config, colors, styles, components };

export default extendTheme({ ...customConfig });
