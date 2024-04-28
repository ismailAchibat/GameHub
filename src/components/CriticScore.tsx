import { Badge, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return score ? (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  ) : (
    <Text>Unknown</Text>
  );
};

export default CriticScore;
