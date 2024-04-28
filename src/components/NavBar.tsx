import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/matr1xlogo_NoBG.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";


const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={'/'}>
        <Image src={logo} boxSize="60px" width={20}/>
      </Link>
      
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
