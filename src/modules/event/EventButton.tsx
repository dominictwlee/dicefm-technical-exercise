import { Button, ButtonProps } from "@chakra-ui/react";

type EventButtonProps = Omit<ButtonProps, "textStyle">;
export default function EventButton(props: EventButtonProps) {
  return (
    <Button
      {...props}
      _hover={{ bg: props.isDisabled ? undefined : "primary.500" }}
      _active={{ bg: props.isDisabled ? undefined : "primary.600" }}
      _disabled={{
        bg: "darkGray",
        color: "black",
        cursor: "not-allowed",
      }}
      textStyle="button"
      minW="160px"
    />
  );
}
