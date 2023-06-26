import { useState } from "react";
import {
  Flex,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Circle,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import UserSvg from "assets/UserSvg";
import { chainList } from "utils/mockChains";

type DrawerProps = {
  openDrawer: () => void;
};

const Header = ({ openDrawer }: DrawerProps) => {
  const { colorMode } = useColorMode();
  const [chain, setChain] = useState(chainList[0]);
  const isDark = colorMode === "dark";
  return (
    <Flex justify="space-between" alignItems="center" padding="10px 10px">
      <Flex></Flex>
      <Flex alignItems="center">
        <Menu>
          <MenuButton padding={2} marginRight={5}>
            <Flex alignItems="center">
              <Image
                src={chain.img}
                width="20px"
                height="20px"
                alt="ethereum chain"
              />
              <ChevronDownIcon marginLeft={1} boxSize={5} />
            </Flex>
          </MenuButton>
          <MenuList bg={isDark ? "brand.900" : "white"}>
            {chainList.map(({ name, img }) => (
              <MenuItem
                key={name}
                gap={3}
                bg={isDark ? "brand.900" : "white"}
                marginBottom={2}
                _hover={{ bgColor: isDark ? "brand.800" : "blackAlpha.100" }}
                onClick={() => setChain({ name, img })}
              >
                <Image
                  src={img}
                  width="20px"
                  height="20px"
                  alt="ethereum chain"
                />
                {name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        {/* <Button variant="swap-btn" borderRadius={21}>
          Connect
        </Button> */}
        <Button
          display="flex"
          justifyContent="center"
          gap={2}
          variant="ghost"
          borderWidth={1}
          borderRadius={100}
          onClick={openDrawer}
        >
          <Circle size={21} overflow="hidden">
            <UserSvg />
          </Circle>
          <Text>0x832F...F931</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
