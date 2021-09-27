import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  page: number;
  isCurrent?: boolean;
};

export function PaginationItem({ page, isCurrent }: PaginationItemProps) {
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme={isCurrent && "pink"}
      disabled={isCurrent}
      _disabled={
        isCurrent && {
          bg: "pink.500",
          cursor: "default",
        }
      }
      bg={!isCurrent && "gray.700"}
      hover={
        !isCurrent && {
          bg: "gray.500",
        }
      }
    >
      {page}
    </Button>
  );
}
