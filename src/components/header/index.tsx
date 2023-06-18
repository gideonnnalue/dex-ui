import { Flex, Button, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import ethereumImg from "assets/chains/ethereum.png";


const Header = () => {
  return (
    <Flex justify="space-between" alignItems="center" padding="10px 10px">
      <Flex></Flex>
      <Flex alignItems="center">
        <Button size="sm" variant="ghost" padding={2} marginRight={5}>
          <Flex alignItems="center">
            <Image
              src={ethereumImg}
              width="20px"
              height="20px"
              alt="ethereum chain"
            />
            <ChevronDownIcon marginLeft={1} boxSize={5} />
          </Flex>
        </Button>
        <Button variant="swap-btn">Connect</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
