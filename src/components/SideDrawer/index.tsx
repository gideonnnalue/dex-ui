import { ArrowRightIcon, CopyIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Icon,
  Circle,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import UserSvg from "assets/UserSvg";
import { useState } from "react";
import { AiOutlinePoweroff, AiOutlineSetting } from "react-icons/ai";

const closeBtn = css`
  &:hover svg {
    color: var(--chakra-colors-whiteAlpha-400);
  }
`;

const copyWalletStyle = css`
  background: transparent !important;
  &:hover > * {
    color: var(--chakra-colors-whiteAlpha-600);
  }

  &:active > * {
    color: var(--chakra-colors-whiteAlpha-700);
  }
`;

type SideDrawerProps = {
  closeDrawer: () => void;
  isVisible: boolean;
};

const SideDrawer = ({ closeDrawer, isVisible }: SideDrawerProps) => {
  const [disconnectPressed, setDisconnectPressed] = useState(false);
  const handleDisconnect = () => {
    setDisconnectPressed(prev => !prev)
  }
  return (
    <Box
      transform={`translateX(${isVisible ? "0px" : "500px"})`}
      visibility={isVisible ? "visible" : "hidden"}
      position="fixed"
      width={420}
      height="100%"
      top={0}
      right={0}
      transition="all 0.2s"
    >
      <Button
        variant="ghost"
        css={closeBtn}
        position="absolute"
        top={2}
        right={2}
        width="94%"
        height="98%"
        padding={4}
        borderRadius={20}
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          width: "92.5%",
          bg: "whiteAlpha.50",
        }}
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        onClick={closeDrawer}
      >
        <ArrowRightIcon
          boxSize={2.5}
          color="whiteAlpha.700"
          transition="all 0.2s"
        />
      </Button>
      <Box
        borderWidth={1}
        position="absolute"
        width={340}
        height="98%"
        top={2}
        right={2}
        bg="brand.900"
        borderRadius={10}
        px={5}
        py={4}
      >
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <VStack alignItems="flex-start" gap={0}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
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
                    <Icon as={AiOutlineSetting} color="whiteAlpha.800" />
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
                  <Icon as={AiOutlinePoweroff} color="whiteAlpha.800" />
                  {disconnectPressed && <Text fontSize="sm" fontWeight="normal">Disconnect</Text>}
                </Button>
              </HStack>
            </Flex>
            <Text fontSize="3xl">$0.00</Text>
          </VStack>
          <Flex justifyContent="space-between" alignItems="center">
            <Text>Theme</Text>
            <HStack borderWidth={1} borderRadius={10} p={0.5}>
              <Button
                px={2}
                py={2}
                minW={0}
                minH={0}
                height="fit-content"
                variant="ghost"
              >
                <Text fontSize="sm">Auto</Text>
              </Button>
              <Button
                px={2}
                py={2}
                minW={0}
                minH={0}
                height="fit-content"
                variant="ghost"
              >
                <SunIcon />
              </Button>
              <Button
                px={2}
                py={2}
                minW={0}
                minH={0}
                height="fit-content"
                variant="ghost"
              >
                <MoonIcon />
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideDrawer;
