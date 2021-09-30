import { Box, HStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
      direction={isWideVersion ? "row" : "column"}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent page={1} />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
        <PaginationItem page={5} />
        <PaginationItem page={6} />
      </HStack>
    </Stack>
  );
}
