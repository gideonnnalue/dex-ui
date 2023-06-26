import { Circle, HStack, Image, VStack, Text } from "@chakra-ui/react";

export type TokenItem = {
  name: string;
  token: string;
  img: string;
};

type SelectItemProps = {
  name: string;
  token: string;
  img: string;
  onSelect: (item: TokenItem) => unknown;
};

const SelectItem = (props: SelectItemProps) => {
  const { name, token, img, onSelect } = props;
  return (
    <HStack
      justifyContent="space-between"
      py={3}
      px={6}
      _hover={{ bg: "whiteAlpha.200" }}
      onClick={() => onSelect({ name, token, img })}
      cursor="pointer"
    >
      <HStack gap={4}>
        <Circle>
          <Image src={img} boxSize={8} />
        </Circle>
        <VStack gap={0} alignItems="flex-start">
          <Text
            fontSize={16}
            padding={0}
            lineHeight={1.2}
            fontWeight="semibold"
          >
            {name}
          </Text>
          <Text
            fontSize={14}
            padding={0}
            lineHeight={1.1}
            fontWeight="light"
            color="gray"
          >
            {token}
          </Text>
        </VStack>
      </HStack>
      <HStack>
        <Text>0</Text>
      </HStack>
    </HStack>
  );
};

export default SelectItem;
