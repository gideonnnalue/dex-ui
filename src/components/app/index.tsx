import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Layout, Header } from "components";
import theme from "theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout header={<Header />}>appp</Layout>
    </ChakraProvider>
  );
};

export default App;
