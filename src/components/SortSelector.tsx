import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortList = [
    "Relevance",
    "Date added",
    "Name",
    "Release Date",
    "Popularity",
    "Average Rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {sortList.map((sortType) => (
          <MenuItem> {sortType} </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
