import { Spacer, Flex, Button, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

import ethereumImg from "assets/chains/ethereum.png";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Flex justify="space-between">
      <Flex></Flex>
      <Flex>
        <Button size="sm" variant="ghost">
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
        <Button>Connect</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
