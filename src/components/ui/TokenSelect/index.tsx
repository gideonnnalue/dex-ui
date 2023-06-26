import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import SelectItem, { TokenItem } from "./SelectItem";
import { tokenList } from "utils/mockChains";

type TokenSelectProps = {
  isOpen: boolean;
  onOpen: () => unknown;
  onClose: () => unknown;
  onSelect: (item: TokenItem) => unknown;
};

const TokenSelect = (props: TokenSelectProps) => {
  const { isOpen, onOpen, onClose, onSelect } = props;
  const onSelectToken = (item: TokenItem) => {
    onClose();
    onSelect(item)
  } 
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent bg="brand.900">
        <ModalHeader fontSize={16}>Select a Token</ModalHeader>
        <ModalCloseButton />
        <VStack px={6} pb={6} borderBottomWidth={1}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} boxSize={6} color="whiteAlpha.600" />
            </InputLeftElement>
            <Input
              borderRadius={10}
              type="tel"
              placeholder="Search name or paste address"
            />
          </InputGroup>
        </VStack>
        <ModalBody px={0}>
          {tokenList.map((token) => (
            <SelectItem
              key={token.name}
              name={token.name}
              token={token.token}
              img={token.img}
              onSelect={onSelectToken}
            />
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TokenSelect;
