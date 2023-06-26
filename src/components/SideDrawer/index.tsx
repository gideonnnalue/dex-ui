import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Text, Flex, VStack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import ThemeSwitcher from "./ThemeSwitcher";
import DrawerHeader from "./DrawerHeader";

const closeBtn = css`
  &:hover svg {
    color: var(--chakra-colors-whiteAlpha-400);
  }
`;

type SideDrawerProps = {
  closeDrawer: () => void;
  isVisible: boolean;
};

const SideDrawer = ({ closeDrawer, isVisible }: SideDrawerProps) => {
  return (
    <Box
      transform={`translateX(${isVisible ? "0px" : "500px"})`}
      visibility={isVisible ? "visible" : "hidden"}
      position="fixed"
      width={420}
      height="100%"
      top={0}
      right={0}
      transition="all 0.2s"
    >
      <Button
        variant="ghost"
        css={closeBtn}
        position="absolute"
        top={2}
        right={2}
        width="94%"
        height="98%"
        padding={4}
        borderRadius={20}
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          width: "92.5%",
          bg: "whiteAlpha.50",
        }}
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        onClick={closeDrawer}
      >
        <ArrowRightIcon
          boxSize={2.5}
          color="whiteAlpha.700"
          transition="all 0.2s"
        />
      </Button>
      <Box
        borderWidth={1}
        position="absolute"
        width={340}
        height="98%"
        top={2}
        right={2}
        bg="brand.900"
        borderRadius={10}
        px={5}
        py={4}
      >
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <VStack alignItems="flex-start" gap={0}>
            <DrawerHeader />
            <Text fontSize="3xl">$0.00</Text>
          </VStack>
          <ThemeSwitcher />
        </Flex>
      </Box>
    </Box>
  );
};

export default SideDrawer;
