import { QueryClient, QueryClientConfig, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/modules/theme";
import { useRef } from "react";
import useBootStrapMSW from "@/app/useBootstrapMSW";

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

  const { shouldRender } = useBootStrapMSW();

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
