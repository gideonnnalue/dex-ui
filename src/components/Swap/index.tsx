import {
  Container,
  Center,
  Box,
  Flex,
  Input,
  Button,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import SwapInput from "components/SwapInput";

const Swap = () => {
  return (
    <Container>
      <Center>
        <Box
          width={400}
          bg="brand.900"
          borderRadius={10}
          borderWidth="1px"
          padding={1}
        >
          <VStack>
            <VStack gap={0.5} position="relative">
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
            <Button
              variant="swap-btn"
              width="100%"
              fontWeight={600}
              fontSize={16}
              padding={6}
              borderRadius={13}
            >
              Connect Wallet
            </Button>
          </VStack>
        </Box>
      </Center>
    </Container>
  );
};

export default Swap;
