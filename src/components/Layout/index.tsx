import { PropsWithChildren, ReactElement } from "react";
import { Box, useColorMode } from "@chakra-ui/react";

interface LayoutProps {
  header: ReactElement;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { header, children } = props;
  const { colorMode } = useColorMode();
  return (
    <Box height="100vh" width="100vw" position="relative" overflow="hidden" bg={colorMode === "light" ? "brand.50" : "blue.800"}>
      {header}
      {children}
    </Box>
  );
};

export default Layout;
