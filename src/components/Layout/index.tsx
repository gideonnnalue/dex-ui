import { PropsWithChildren, ReactElement } from "react";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  header: ReactElement;
}

const AppWrapper = styled.main`
  height: 100vh;
  width: 100vw;
`

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { header, children } = props;
  return (
    <Box height="100vh" width="100vw" position="relative">
      {header}
      {children}
    </Box>
  );
};

export default Layout;
