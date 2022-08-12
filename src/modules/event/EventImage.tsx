import { Box, Image } from "@chakra-ui/react";
import { DiceEvent } from "./api";

export enum EventImageVariant {
  Square = "square",
  Portrait = "portrait",
  Landscape = "landscape",
}

interface EventImage {
  eventImages: DiceEvent["event_images"];
  variant?: EventImageVariant;
}
export default function EventImage({
  eventImages,
  variant = EventImageVariant.Square,
}: EventImage) {
  const image = eventImages[variant];
  return (
    <Box>
      <Image src={image} alt="Event Image" />
    </Box>
  );
}
