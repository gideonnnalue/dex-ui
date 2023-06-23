import { SearchIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Circle,
  Image,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

import ethereumImg from "assets/chains/ethereum.png";
import polygonImg from "assets/chains/polygon-matic-logo.svg";
import optimismImg from "assets/chains/optimistic_ethereum.svg";
import arbitrumImg from "assets/chains/arbitrum_logo.svg";
import celoImg from "assets/chains/celo_logo.svg";
import bnbImg from "assets/chains/bnb-logo.svg";
import SelectItem from "./SelectItem";

const tokeList = [
  { name: "Ethereum", token: "ETH", img: ethereumImg },
  { name: "Polygon", token: "MATIC", img: polygonImg },
  { name: "Optimism", token: "OPT", img: optimismImg },
  { name: "Arbitrum", token: "ARB", img: arbitrumImg },
  { name: "Celo", token: "CELO", img: celoImg },
  { name: "BNB Chain", token: "BNB", img: bnbImg },
  { name: "Ethereum", token: "ETH", img: ethereumImg },
  { name: "Polygon", token: "MATIC", img: polygonImg },
  { name: "Optimism", token: "OPT", img: optimismImg },
  { name: "Arbitrum", token: "ARB", img: arbitrumImg },
  { name: "Celo", token: "CELO", img: celoImg },
  { name: "BNB Chain", token: "BNB", img: bnbImg },
  { name: "Ethereum", token: "ETH", img: ethereumImg },
  { name: "Polygon", token: "MATIC", img: polygonImg },
  { name: "Optimism", token: "OPT", img: optimismImg },
  { name: "Arbitrum", token: "ARB", img: arbitrumImg },
  { name: "Celo", token: "CELO", img: celoImg },
  { name: "BNB Chain", token: "BNB", img: bnbImg },
];

const TokenSelect = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
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
              <Input borderRadius={10} type="tel" placeholder="Search name or paste address" />
            </InputGroup>
          </VStack>
          <ModalBody px={0}>
            {tokeList.map((token) => (
              <SelectItem
                key={token.name}
                name={token.name}
                token={token.token}
                img={token.img}
              />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TokenSelect;
