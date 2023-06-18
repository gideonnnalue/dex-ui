import { PropsWithChildren, ReactElement } from "react";
import styled from "@emotion/styled";

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
    <AppWrapper>
      {header}
      {children}
    </AppWrapper>
  );
};

export default Layout;
