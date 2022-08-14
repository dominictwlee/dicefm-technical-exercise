import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Heading,
  Text,
  List,
  ListItem,
  ExpandedIndex,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { MdAdd, MdOutlineRemove, MdHorizontalRule } from "react-icons/md";
import Dinero, { Currency } from "dinero.js";
import { DiceEvent } from "./types";

interface EventInfoExpandableProps {
  description: string;
  lineup: DiceEvent["lineup"];
  ticketTypes: DiceEvent["ticket_types"];
  currency: Currency;
  onChange?: (expandedIndex: ExpandedIndex) => void;
}
export default function EventInfoExpandable({
  lineup,
  ticketTypes,
  currency,
  description,
  onChange,
}: EventInfoExpandableProps) {
  return (
    <Accordion allowToggle onChange={onChange}>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton textStyle="subtitle1" bg="lightGray" _hover={{ bg: "darkGray" }}>
                <Box flex="1" textAlign="left">
                  More info
                </Box>
                {isExpanded ? <MinusIcon /> : <AddIcon />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textStyle="body1" bg="lightGray">
              <Text>{description}</Text>

              <Box py={4}>
                <EventListedInfo title="line up">
                  {lineup.map((l) => (
                    <EventListedInfoItem key={l.details} name={l.details} description={l.time} />
                  ))}
                </EventListedInfo>
              </Box>

              <EventListedInfo title="tickets">
                {ticketTypes.map((ticketType) => {
                  const price = Dinero({
                    amount: ticketType.price.total,
                    currency,
                  }).toFormat("$0,0.00");
                  return (
                    <EventListedInfoItem
                      key={ticketType.id}
                      name={ticketType.name}
                      description={price}
                      rightAdornment={
                        ticketType.sold_out ? <Text variant="caption2">sold out</Text> : undefined
                      }
                    />
                  );
                })}
              </EventListedInfo>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

interface EventListedInfoProps {
  title: string;
  children: React.ReactNode;
}
function EventListedInfo({ title, children }: EventListedInfoProps) {
  return (
    <Box>
      <Heading as="h4" variant="subtitle2" mb={1}>
        {title}
      </Heading>
      <List>{children}</List>
    </Box>
  );
}

interface EventListedInfoItemProps {
  name: string;
  description: string;
  rightAdornment?: ReactElement;
}
function EventListedInfoItem({ name, description, rightAdornment }: EventListedInfoItemProps) {
  return (
    <ListItem textStyle="caption1" display="flex" alignItems="center" minH={8}>
      <Text>{name}</Text>
      {description && (
        <>
          <Box pt={1}>
            <LongDashIcon />
          </Box>
          <Text variant="caption1" fontWeight={600}>
            {description}
          </Text>
        </>
      )}
      {rightAdornment && (
        <Box textStyle="caption2" ml={2} fontWeight={600}>
          {rightAdornment}
        </Box>
      )}
    </ListItem>
  );
}

function LongDashIcon() {
  return <Icon as={MdHorizontalRule} boxSize="24px" color="black" />;
}

function AddIcon() {
  return <Icon as={MdAdd} boxSize="24px" color="black" />;
}

function MinusIcon() {
  return <Icon as={MdOutlineRemove} boxSize="24px" color="black" />;
}
