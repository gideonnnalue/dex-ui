import {
  Container,
  Center,
  Box,
  Flex,
  Button,
  VStack,
  IconButton,
  Text
} from "@chakra-ui/react";
import { ArrowDownIcon, SettingsIcon } from "@chakra-ui/icons";
import SwapInput from "components/ui/SwapInput";
import ConnectButton from "components/ui/ConnectButton";
import TokenSelect from "components/ui/TokenSelect";

const Swap = () => {
  return (
    <Container>
      <Center>
        <Box
          width={500}
          bg="brand.900"
          borderRadius={20}
          borderWidth="1px"
          padding={2}
        >
          <VStack gap={1}>
            <Flex justifyContent="space-between" width="100%" paddingRight={3} paddingLeft={3}>
              <Button variant="ghost" padding={0} height="unset" fontSize={16} fontWeight={700}>
                Swap
              </Button>
              <IconButton variant="ghost" aria-label="settings" padding={0} icon={<SettingsIcon />} />
            </Flex>
            <VStack gap={1} position="relative">
              <SwapInput />
              <SwapInput />
              <IconButton
                aria-label="switch swap"
                icon={<ArrowDownIcon boxSize={4} color="white" />}
                padding={2}
                height="fit-content"
                minWidth="fit-content"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                borderWidth={2}
                borderColor="brand.900"
                bgColor="#2c313e"
              />
            </VStack>
            <ConnectButton />
          </VStack>
        </Box>
      </Center>
      <TokenSelect />
    </Container>
  );
};

export default Swap;
