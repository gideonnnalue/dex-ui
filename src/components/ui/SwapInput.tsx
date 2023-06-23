import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Input, Button, Text, VStack } from "@chakra-ui/react";

const SwapInput = () => {
  return (
    <VStack
      bg="rgb(19, 26, 42)"
      borderRadius={10}
      paddingTop={4}
      paddingBottom={3}
      paddingLeft={3}
      paddingRight={3}
      transitionProperty="borderWidth"
      transitionDuration="1.3s"
      _hover={{ borderColor: "whiteAlpha.50" }}
      _focusWithin={{ borderColor: "whiteAlpha.300" }}
      borderColor="transparent"
      borderWidth={1}
      gap={1}
      height={100}
    >
      <Flex alignItems="center" mb={2}>
        <Input
          padding={0}
          placeholder="0"
          type="number"
          fontSize={38}
          border="none"
          _focusVisible={{ outline: "none" }}
        />
        <Button
          bg="rgba(255, 255, 255, 0.15)"
          padding="3px 18px"
          borderRadius={1000}
          height="fit-content"
          minHeight="unset"
        >
          <Text as="span" fontSize={8} marginRight={2}>
            ETH
          </Text>
          <Text fontSize={22}>ETH</Text>
          <ChevronDownIcon as="span" boxSize={5} marginLeft={2} />
        </Button>
      </Flex>
      {/* TODO: First Item: token price                   */}
      {/*       Second Item: Users balance for that token */}
      {/* <Flex justifyContent="space-between" width="100%">
        <Text fontSize={16}>$1,739.84</Text>
        <Text fontSize={16} color="whiteAlpha.500">
          Balance: 0
        </Text>
      </Flex> */}
    </VStack>
  );
};

export default SwapInput;
