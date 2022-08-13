import { Box, Heading, ListItem, Text } from "@chakra-ui/react";
import EventImage, { EventImageVariant } from "./EventImage";
import EventInfoExpandable from "./EventInfoExpandable";
import EventButton from "./EventButton";
import { LongDashIcon } from "@/common/components/icons";
import { compareAsc, format } from "date-fns";
import lookup from "country-code-lookup";
import { Currency } from "dinero.js";
import Dinero from "dinero.js";
import { DiceEvent } from "./types";
import { useState } from "react";

interface EventCardProps {
  saleStartDate: string;
  eventImages: DiceEvent["event_images"];
  date: string;
  name: string;
  location: DiceEvent["location"];
  description: string;
  lineup: DiceEvent["lineup"];
  ticketTypes: DiceEvent["ticket_types"];
  currency: Currency;
  isFeatured: boolean;
  venue: string;
  audioSrc?: string | null;
  isPlaying: boolean;
  onPlayClick: () => void;
}
export default function EventCard({
  saleStartDate,
  eventImages,
  date,
  name,
  location,
  description,
  lineup,
  ticketTypes,
  currency,
  isFeatured,
  venue,
  audioSrc,
  isPlaying,
  onPlayClick,
}: EventCardProps) {
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);
  const rawDate = new Date(date);
  const formattedDate = format(rawDate, "EEE d MMM");
  const formattedTime = format(rawDate, "h:mmaaa");
  const formattedLocation = `${location.city}, ${lookup.byCountry(location.country)?.fips}`;
  const isSoldOut = ticketTypes.every((ticketType) => ticketType.sold_out);
  const onSaleDate = new Date(saleStartDate);
  const isFutureSaleDate = compareAsc(new Date(), onSaleDate) === -1;
  const hasMultipleTicketTypes = ticketTypes.length > 1;
  const lowestTicketPrice = ticketTypes[0]?.price.total ?? 0;
  const parsedLowestTicketPrice = Dinero({
    amount: lowestTicketPrice,
    currency,
  });
  const formattedLowestTicketPrice = parsedLowestTicketPrice.toFormat(
    parsedLowestTicketPrice.hasSubUnits() ? "$0,0.00" : "$0,0"
  );

  const renderActionButton = () => {
    if (isSoldOut) {
      return <EventButton disabled>sold out</EventButton>;
    }

    if (isFutureSaleDate) {
      return <EventButton>get reminded</EventButton>;
    }

    return <EventButton>book now</EventButton>;
  };

  const onExpandableChange = () => {
    setIsAccordianOpen((isOpen) => !isOpen);
  };

  return (
    <Box maxW="320px" minH="853px" pb={2}>
      <EventImage
        eventImages={eventImages}
        saleStartDate={saleStartDate}
        isFeatured={isFeatured}
        variant={isAccordianOpen ? EventImageVariant.Landscape : EventImageVariant.Square}
        isFutureShowDate={isFutureSaleDate}
        audioSrc={audioSrc}
        isPlaying={isPlaying}
        onPlayClick={onPlayClick}
      />

      <Box textStyle="caption1" display="flex" alignItems="center" my={2}>
        <Text>{formattedDate}</Text>
        <Box pt={1}>
          <LongDashIcon />
        </Box>
        <Text variant="caption1">{formattedTime}</Text>
      </Box>

      <Heading variant="title1" as="h2">
        {name}
      </Heading>

      <Box my={4}>
        <Heading as="h3" variant="subtitle1">
          {venue}
        </Heading>
        <Text variant="caption1">{formattedLocation}</Text>
      </Box>

      <EventInfoExpandable
        onChange={onExpandableChange}
        description={description}
        lineup={lineup}
        ticketTypes={ticketTypes}
        currency={currency}
      />

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        {renderActionButton()}
        <Box>
          {hasMultipleTicketTypes && (
            <Text textAlign="right" variant="caption1" opacity="0.5">
              From
            </Text>
          )}
          <Text fontSize="32px" lineHeight="36px">
            {formattedLowestTicketPrice}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
