import { useState } from "react";
import { CopyIcon } from "@chakra-ui/icons";
import {
  Flex,
  Circle,
  Button,
  Text,
  HStack,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import UserSvg from "assets/UserSvg";
import { AiOutlinePoweroff, AiOutlineSetting } from "react-icons/ai";

const DrawerHeader = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const copyWalletStyle = css`
    background: transparent !important;
    &:hover > * {
      color: var(--chakra-colors-${isDark ? "whiteAlpha" : "blackAlpha"}-600);
    }

    &:active > * {
      color: var(--chakra-colors-${isDark ? "whiteAlpha" : "blackAlpha"}-700);
    }
  `;

  const [disconnectPressed, setDisconnectPressed] = useState(false);
  const handleDisconnect = () => {
    setDisconnectPressed((prev) => !prev);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" width="100%">
      <Flex alignItems="center">
        <Circle size={30} overflow="hidden">
          <UserSvg />
        </Circle>
        <Button css={copyWalletStyle} variant="ghost" gap={2}>
          <Text fontSize="sm" fontWeight="semibold">
            0x832F...F931
          </Text>
          <CopyIcon boxSize={3.5} color="transparent" />
        </Button>
      </Flex>
      <HStack>
        {!disconnectPressed && (
          <Button
            px={1.5}
            py={1.5}
            minW={0}
            minH={0}
            height="fit-content"
            borderRadius={10}
          >
            <Icon as={AiOutlineSetting} />
          </Button>
        )}

        <Button
          px={1.5}
          py={1.5}
          minW={0}
          minH={0}
          height="fit-content"
          borderRadius={10}
          gap={1}
          onClick={handleDisconnect}
          width={disconnectPressed ? 110 : 7}
          transition="all 0.2s"
          overflow="hidden"
        >
          <Icon as={AiOutlinePoweroff} />
          {disconnectPressed && (
            <Text fontSize="sm" fontWeight="normal">
              Disconnect
            </Text>
          )}
        </Button>
      </HStack>
    </Flex>
  );
};

export default DrawerHeader;
