import {
  Container,
  Center,
  Box,
  Flex,
  Button,
  VStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { ArrowDownIcon, SettingsIcon } from "@chakra-ui/icons";
import SwapInput from "components/ui/SwapInput";
import ConnectButton from "components/ui/ConnectButton";
import { TokenItem } from "components/ui/TokenSelect/SelectItem";
import { useState } from "react";

const Swap = () => {
  const { colorMode } = useColorMode()
  const [swapFrom, setSwapFrom] = useState<TokenItem | null>(null);
  const [swapTo, setSwapTo] = useState<TokenItem | null>(null);
  const swapTokenInput = () => {
    const token1 = swapFrom ? { ...swapFrom } : null;
    const token2 = swapTo ? { ...swapTo } : null;
    setSwapFrom(token2);
    setSwapTo(token1);
  };
  const isDark: boolean = colorMode === "dark";
  return (
    <Container>
      <Center>
        <Box
          width={470}
          bg={isDark ? "brand.900" : "white"}
          borderRadius={20}
          borderWidth="1px"
          padding={2}
        >
          <VStack gap={1}>
            <Flex
              justifyContent="space-between"
              width="100%"
              paddingRight={3}
              paddingLeft={3}
            >
              <Button
                variant="ghost"
                padding={0}
                height="unset"
                fontSize={16}
                fontWeight={700}
              >
                Swap
              </Button>
              <IconButton
                variant="ghost"
                aria-label="settings"
                padding={0}
                icon={<SettingsIcon />}
              />
            </Flex>
            <VStack gap={1} position="relative">
              <SwapInput
                tokenAttributes={swapFrom}
                setTokenAttributes={setSwapFrom}
              />
              <SwapInput
                tokenAttributes={swapTo}
                setTokenAttributes={setSwapTo}
              />
              <IconButton
                aria-label="switch swap"
                icon={<ArrowDownIcon boxSize={4} color={isDark ? "white" : "blackAlpha.900"} />}
                padding={2}
                height="fit-content"
                minWidth="fit-content"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                borderWidth={3}
                borderColor={isDark ? "brand.900" : "white"}
                _hover={{ bg: isDark ? "rgb(66 71 82)" : "gray.50" }}
                bgColor={isDark ? "#2c313e": "grey.100"}
                onClick={swapTokenInput}
              />
            </VStack>
            <ConnectButton />
          </VStack>
        </Box>
      </Center>
    </Container>
  );
};

export default Swap;
