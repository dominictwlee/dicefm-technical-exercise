import { Icon, IconProps } from "@chakra-ui/react";
import { MdHorizontalRule } from "react-icons/md";

export function LongDashIcon(props: IconProps) {
  return <Icon as={MdHorizontalRule} boxSize="24px" color="black" {...props} />;
}
