import { Circle, HStack, Image, VStack, Text } from "@chakra-ui/react";

type SelectItemProps = {
  name: string;
  token: string;
  img: string;
};

const SelectItem = (props: SelectItemProps) => {
  const { name, token, img } = props;
  return (
    <HStack justifyContent="space-between" py={3} px={6} _hover={{bg: "whiteAlpha.200"}}>
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
            color="whiteAlpha.500"
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
