import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import colors from "./colors";
import textStyles from "./textStyles";
import typography from "./typography";
import { buttonStyles } from "./components";
import headingStyles from "./heading";

const theme = extendTheme(
  {
    colors,
    textStyles,
    ...typography,
    components: {
      Button: buttonStyles,
      Heading: headingStyles,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button", "IconButton"],
  })
);

export default theme;
