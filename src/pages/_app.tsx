import { QueryClient, QueryClientConfig, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/modules/theme";
import { useEffect, useRef, useState } from "react";
import initMSW from "../mocks";

function MyApp({ Component, pageProps }: AppProps) {
  const options: QueryClientConfig = {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  };

  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    if (options.defaultOptions?.queries) {
      options.defaultOptions.queries.retry = false;
    }
  }
  const queryClientRef = useRef(new QueryClient(options));
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    async function initMocks() {
      await initMSW();
      setShouldRender(true);
    }

    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      initMocks();
    }
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
