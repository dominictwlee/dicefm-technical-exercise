import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/modules/theme";
import { useRef, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
