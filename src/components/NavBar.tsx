import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={
          "https://raw.githubusercontent.com/mosh-hamedani/game-hub/main/src/assets/logo.webp"
        }
        boxSize="60px"
      />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
