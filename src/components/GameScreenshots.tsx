import { Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenshots";

interface Props{
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
   const { data, error, isLoading } = useScreenShots(gameId);

   if(isLoading) return <Spinner/>;
   if(error) throw error;

   return data?.results? (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={3}>
        {data.results.map( image => <Image key={image.id} src={image.image} />)}
    </SimpleGrid>
   ) : <Text>Couldn't find screenshots from this game</Text>
    

}

export default GameScreenshots