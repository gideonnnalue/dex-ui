import { Button, Text } from "@chakra-ui/react";

const ConnectButton = () => {
  return (
    <Button
      variant="swap-btn"
      width="100%"
      fontWeight={600}
      fontSize={16}
      padding={7}
      borderRadius={13}
    >
      <Text fontSize={22} fontWeight="semibold">
        Connect Wallet
      </Text>
    </Button>
  );
};
export default ConnectButton;
