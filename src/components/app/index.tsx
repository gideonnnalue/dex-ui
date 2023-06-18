import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Layout, Header, Swap } from "components";
import theme from "theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout header={<Header />}>
        <Swap />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
