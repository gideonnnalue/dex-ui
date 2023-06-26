import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  Button,
  Text,
  VStack,
  useDisclosure,
  Circle,
  Image,
} from "@chakra-ui/react";
import TokenSelect from "./TokenSelect";
import { TokenItem } from "./TokenSelect/SelectItem";

type SwapInputProps = {
  tokenAttributes: TokenItem | null;
  setTokenAttributes: (tokenAttributes: TokenItem) => unknown;
};

const SwapInput = (props: SwapInputProps) => {
  const { tokenAttributes, setTokenAttributes } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          bg={tokenAttributes ? "rgba(255, 255, 255, 0.15)" : "brand.300"}
          padding="3px 18px"
          borderRadius={1000}
          height="fit-content"
          minHeight="unset"
          onClick={onOpen}
          width="fit-content"
        >
          {tokenAttributes && (
            <Circle color="whiteAlpha.500" bg="white">
              <Image src={tokenAttributes.img} boxSize={6} />
            </Circle>
          )}
          <Text fontSize={tokenAttributes ? 22 : 16} marginLeft={2}>
            {tokenAttributes ? tokenAttributes.token : "Select Token"}
          </Text>
          <ChevronDownIcon as="span" boxSize={5} mx={1} />
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
      <TokenSelect
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onSelect={(items) => setTokenAttributes(items)}
      />
    </VStack>
  );
};

export default SwapInput;
