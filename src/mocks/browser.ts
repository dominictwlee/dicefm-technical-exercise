import { setupWorker, rest } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

//@ts-ignore
window.msw = {
  worker,
  rest,
};
