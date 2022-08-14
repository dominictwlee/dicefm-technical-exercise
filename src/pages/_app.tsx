import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/modules/theme";
import useBootStrapMSW from "@/app/useBootstrapMSW";
import QueryClientProvider from "@/app/QueryClientProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const { shouldRender } = useBootStrapMSW();

  if (!shouldRender) {
    return null;
  }

  return (
    <QueryClientProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
