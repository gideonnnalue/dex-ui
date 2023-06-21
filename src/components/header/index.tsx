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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import ethereumImg from "assets/chains/ethereum.png";
import polygonImg from "assets/chains/polygon-matic-logo.svg";
import optimismImg from "assets/chains/optimistic_ethereum.svg";
import arbitrumImg from "assets/chains/arbitrum_logo.svg";
import celoImg from "assets/chains/celo_logo.svg";
import bnbImg from "assets/chains/bnb-logo.svg";

import UserSvg from "assets/UserSvg";

const chainList = [
  { name: "Ethereum", img: ethereumImg },
  { name: "Polygon", img: polygonImg },
  { name: "Optimism", img: optimismImg },
  { name: "Arbitrum", img: arbitrumImg },
  { name: "Celo", img: celoImg },
  { name: "BNB Chain", img: bnbImg },
];

const Header = () => {
  const [chain, setChain] = useState(chainList[0]);
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
          <MenuList bg="brand.900">
            {chainList.map(({ name, img }) => (
              <MenuItem
                key={name}
                gap={3}
                bg="brand.900"
                marginBottom={2}
                _hover={{ bgColor: "brand.800" }}
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
        <Button display="flex" justifyContent="center" gap={2} variant="ghost" borderWidth={1} borderRadius={100}>
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
