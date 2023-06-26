import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Text, Button, HStack, useColorMode } from "@chakra-ui/react";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
          onClick={() => colorMode === "dark" && toggleColorMode()}
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
          onClick={() => colorMode === "light" && toggleColorMode()}
        >
          <MoonIcon />
        </Button>
      </HStack>
    </Flex>
  );
};

export default ThemeSwitcher;
