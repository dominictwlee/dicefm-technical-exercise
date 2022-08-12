import { Box, ListItem, Text } from "@chakra-ui/react";
import EventImage, { EventImageVariant } from "./EventImage";
import EventInfoExpandable from "./EventInfoExpandable";
import EventButton from "./EventButton";
import { DiceEvent } from "./api";
import { LongDashIcon } from "@/common/components/icons";
import { format } from "date-fns";

interface EventCardProps {
  saleStartDate: string;
  eventImages: DiceEvent["event_images"];
  date: string;
}
export default function EventCard({ saleStartDate, eventImages, date }: EventCardProps) {
  const rawDate = new Date(date);
  const formattedDate = format(rawDate, "EEE d MMM");
  const formattedTime = format(rawDate, "h:mmaaa");

  return (
    <Box maxW="320px" minH="853px">
      <EventImage
        eventImages={eventImages}
        saleStartDate={saleStartDate}
        isFeatured
        variant={EventImageVariant.Square}
      />
      <Text variant="caption1">{date}</Text>

      <Box textStyle="caption1" display="flex" alignItems="center">
        <Text>{formattedDate}</Text>
        <Box pt={1}>
          <LongDashIcon />
        </Box>
        <Text variant="caption1" fontWeight={600}>
          {formattedTime}
        </Text>
      </Box>
    </Box>
  );
}
