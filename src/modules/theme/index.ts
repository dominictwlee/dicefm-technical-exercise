import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import textStyles from "./textStyles";
import { buttonStyles } from "./components";

const theme = extendTheme({
  colors,
  textStyles,
  components: {
    Button: buttonStyles,
  },
});

export default theme;
