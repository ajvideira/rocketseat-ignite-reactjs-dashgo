import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type Profile = {
  showData: boolean;
};

export function Profile({ showData }: Profile) {
  return (
    <Flex align="center">
      {showData && (
        <Box mr="4" textAlign="right">
          <Text>Jonathan Videira</Text>
          <Text color="gray.300" fontSize="small">
            jonathan.videira@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Jonathan Videira"
        src="https://github.com/ajvideira.png"
      />
    </Flex>
  );
}
