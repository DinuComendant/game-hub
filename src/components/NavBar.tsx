import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={
          "https://raw.githubusercontent.com/mosh-hamedani/game-hub/main/src/assets/logo.webp"
        }
        boxSize="60px"
      />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;