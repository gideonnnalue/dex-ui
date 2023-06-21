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
            <motion.div
              initial={{ translateX: 500 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: 500 }}
            >
              <SideDrawer
                closeDrawer={() => setIsDrawerVisible((prev) => !prev)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
