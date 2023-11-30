import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { CanceledError } from "axios";
import useGames, { FetchResponseGames } from "./Hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text> {error} </Text>}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </>
  );
};

export default GameGrid;
