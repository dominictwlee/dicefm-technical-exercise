import {
  QueryClientConfig,
  QueryClient,
  QueryClientProvider as QueryClientProviderLib,
} from "@tanstack/react-query";
import { PropsWithChildren, useRef, useState } from "react";

export default function QueryClientProvider(props: PropsWithChildren) {
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
  const [queryClient] = useState(() => new QueryClient(options));

  return <QueryClientProviderLib client={queryClient}>{props.children}</QueryClientProviderLib>;
}
