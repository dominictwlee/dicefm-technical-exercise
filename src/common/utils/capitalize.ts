export function capitalizeAllWords(input: string) {
  return input.split(" ").map(capitalize).join(" ");
}

export function capitalize(input: string) {
  if (!input) {
    return "";
  }
  return input[0].toUpperCase() + input.slice(1);
}
