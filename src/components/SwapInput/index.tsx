import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Input, Button, Text } from "@chakra-ui/react";

const SwapInput = () => {
  return (
    <Flex
      bg="rgb(19, 26, 42)"
      borderRadius={10}
      padding={5}
      alignItems="center"
      gap={3}
      transitionProperty="borderWidth"
      transitionDuration="0.3s"
      _focusWithin={{ borderColor: "whiteAlpha.300" }}
      borderColor="transparent"
      borderWidth={1}
    >
      <Input
        placeholder="0"
        type="number"
        fontSize={32}
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
        <Text>ETH</Text>
        <ChevronDownIcon as="span" boxSize={5} marginLeft={2} />
      </Button>
    </Flex>
  );
};

export default SwapInput;
