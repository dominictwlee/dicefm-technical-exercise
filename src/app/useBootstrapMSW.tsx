import initMSW from "@/mocks";
import { useState, useEffect } from "react";

export default function useBootStrapMSW() {
  const [shouldRender, setShouldRender] = useState(!process.env.NEXT_PUBLIC_API_MOCKING);

  useEffect(() => {
    async function initMocks() {
      await initMSW();
      setShouldRender(true);
    }

    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      initMocks();
    }
  }, []);

  return { shouldRender };
}
