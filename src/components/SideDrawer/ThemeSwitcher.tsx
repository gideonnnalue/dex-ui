import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Text, Button, HStack } from "@chakra-ui/react";

const ThemeSwitcher = () => {
  return (
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
  );
};

export default ThemeSwitcher;
