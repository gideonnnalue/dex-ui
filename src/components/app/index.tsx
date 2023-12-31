import { Button, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Layout, Header, Swap, SideDrawer } from "components";
import theme from "theme";
import { useState } from "react";

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Layout
        header={
          <Header openDrawer={() => setIsDrawerVisible((prev) => !prev)} />
        }
      >
        <Swap />

        <SideDrawer closeDrawer={() => setIsDrawerVisible((prev) => !prev)} isVisible={isDrawerVisible} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
