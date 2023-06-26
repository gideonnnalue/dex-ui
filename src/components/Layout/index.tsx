import { PropsWithChildren, ReactElement } from "react";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  header: ReactElement;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { header, children } = props;
  return (
    <Box height="100vh" width="100vw" position="relative" overflow="hidden">
      {header}
      {children}
    </Box>
  );
};

export default Layout;
