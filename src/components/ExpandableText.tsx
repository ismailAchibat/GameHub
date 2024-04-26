import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [long, setLong] = useState(true);
  const limit = 700;

  if(!children) throw null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = children.substring(0, limit);

  return (
    <>
      <Text>
        {long ? summary + "..." : children}
        <Button marginLeft={4} size='xs' fontWeight='bold' colorScheme="green" onClick={() => setLong(!long)}>
          {long ? "show more" : "show less"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
