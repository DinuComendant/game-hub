import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./Hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} padding="5px">
            {" "}
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />{" "}
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="lg"
                variant="link"
              >
                {genre.name}{" "}
              </Button>
            </HStack>{" "}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
