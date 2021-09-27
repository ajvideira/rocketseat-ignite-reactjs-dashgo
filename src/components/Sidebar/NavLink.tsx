import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

type NavLinkProps = LinkProps & {
  title: string;
  icon: ElementType;
};

export function NavLink({ title, icon, ...props }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
}
