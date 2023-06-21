import { Button, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Layout, Header, Swap, SideDrawer } from "components";
import theme from "theme";
import { motion, AnimatePresence } from "framer-motion";
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
        <AnimatePresence>
          {isDrawerVisible && (
            <motion.nav
              initial={{ translateX: 500, visibility: "hidden" }}
              animate={{ translateX: 0, visibility: "visible" }}
              exit={{ translateX: 500, visibility: "hidden" }}
            >
              <SideDrawer
                closeDrawer={() => setIsDrawerVisible((prev) => !prev)}
              />
            </motion.nav>
          )}
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
