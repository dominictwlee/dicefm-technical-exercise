import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Box,
} from "@chakra-ui/react";
import { FetchStatus, QueryStatus } from "@tanstack/react-query";

interface EventSearchBarProps {
  status: QueryStatus;
  onSubmit: (value: string) => void;
}
export default function EventSearchBar({ status, onSubmit }: EventSearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (status === "error" || status === "success") {
      setInputValue("");
    }
  }, [status]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <Box maxW="640px">
      <form onSubmit={handleSubmit}>
        <FormControl id="venue-search">
          <FormLabel htmlFor="venue-search">Venue Search</FormLabel>
          <InputGroup size="lg">
            <Input
              name="venue-search"
              pr="4.5rem"
              borderRadius="full"
              focusBorderColor="primary.300"
              placeholder="Search for a venue"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <InputRightElement width="4.5rem" mr={2}>
              <Button
                colorScheme="primary"
                isLoading={status === "loading"}
                borderRadius="full"
                type="submit"
                size="sm"
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
    </Box>
  );
}
