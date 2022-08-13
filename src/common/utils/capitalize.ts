export function capitalizeAllWords(input: string) {
  return input.split(" ").map(capitalize).join(" ");
}

export function capitalize(input: string) {
  return input[0]?.toUpperCase() + input.slice(1) ?? "";
}
