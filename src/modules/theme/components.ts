import textStyles from "./textStyles";

export const buttonStyles = {
  baseStyle: {
    borderRadius: 0,
  },
  sizes: {
    md: {
      fontSize: "14px",
    },
  },
  variants: {
    solid: {
      bg: "primary.400",
    },
  },
};

export const headingStyles = {
  variants: {
    ...textStyles,
  },
};

export const textComponentStyles = {
  variants: {
    ...textStyles,
  },
};
