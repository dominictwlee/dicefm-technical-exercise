import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { format, compareAsc } from "date-fns";
import { ReactNode } from "react";
import { DiceEvent } from "./types";

export enum EventImageVariant {
  Square = "square",
  Landscape = "landscape",
}

const featuredBadgeDimensions = {
  h: 27,
  w: 97,
};

const onSaleBadgeDimensions = {
  h: 27,
  w: 180,
};

interface EventImage {
  eventImages: DiceEvent["event_images"];
  variant?: EventImageVariant;
  isFeatured?: boolean;
  saleStartDate: string;
  isFutureShowDate: boolean;
}
export default function EventImage({
  eventImages,
  variant = EventImageVariant.Square,
  isFeatured,
  saleStartDate,
  isFutureShowDate,
}: EventImage) {
  const image = eventImages[variant];

  function renderBadge() {
    if (isFutureShowDate) {
      const formattedShowDate = format(new Date(saleStartDate), "d MMM h:mmaaa");
      return (
        <Box
          position="relative"
          bottom={`${onSaleBadgeDimensions.h + 16}px`}
          left={`calc(100% - ${onSaleBadgeDimensions.w + 12}px)`}
        >
          <OnSaleBadge>{formattedShowDate}</OnSaleBadge>
        </Box>
      );
    }

    if (isFeatured) {
      return (
        <Box
          position="relative"
          bottom={`${featuredBadgeDimensions.h + 16}px`}
          left={`calc(100% - ${featuredBadgeDimensions.w + 12}px)`}
        >
          <FeaturedBadge />
        </Box>
      );
    }

    return null;
  }

  return (
    <Box w="320px">
      <Image
        placeholder="blur"
        blurDataURL="/image_shimmer_square.svg"
        src={image}
        alt="Event Image"
        width="320px"
        height={variant === EventImageVariant.Landscape ? "160px" : "320px"}
      />
      {renderBadge()}
    </Box>
  );
}

interface OnSaleBadgeProps {
  children: ReactNode;
}
function OnSaleBadge({ children }: OnSaleBadgeProps) {
  return (
    <Box
      h={`${onSaleBadgeDimensions.h}px`}
      maxW={`${onSaleBadgeDimensions.w}px`}
      bg="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2}
    >
      <Text variant="subtitle3">{`On sale ${children}`}</Text>
    </Box>
  );
}

function FeaturedBadge() {
  return (
    <Box
      h={`${featuredBadgeDimensions.h}px`}
      maxW={`${featuredBadgeDimensions.w}px`}
      bg="primary.400"
      px={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text variant="button">featured</Text>
    </Box>
  );
}
