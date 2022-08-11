import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  useDisclosure,
  Heading,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { MdAdd, MdOutlineRemove, MdHorizontalRule } from "react-icons/md";
import { DiceEvent } from "./api";

interface EventInfoExpandableProps {
  description: string;
  lineup: DiceEvent["lineup"];
  ticketTypes: DiceEvent["ticket_types"];
  lowestPrice: number;
}
export default function EventInfoExpandable({ lineup, ticketTypes }: EventInfoExpandableProps) {
  return (
    <Accordion allowToggle>
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
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>

              <EventListedInfo title="line up">
                {lineup.map((l) => (
                  <EventListedInfoItem name={l.details} descriptor={l.time} />
                ))}
              </EventListedInfo>

              <EventListedInfo title="tickets">
                {ticketTypes.map((ticketType) => (
                  <EventListedInfoItem
                    name={ticketType.name}
                    descriptor={`£${ticketType.price.face_value}`}
                    extraDetails={ticketType.sold_out ? "sold out" : undefined}
                  />
                ))}
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
    <Box py={4}>
      <Heading as="h4" variant="subtitle2" mb={2}>
        {title}
      </Heading>
      <List spacing={1}>{children}</List>
    </Box>
  );
}

interface EventListedInfoItemProps {
  name: string;
  descriptor?: string;
  extraDetails?: string;
}
function EventListedInfoItem({ name, descriptor, extraDetails }: EventListedInfoItemProps) {
  return (
    <ListItem textStyle="caption1" display="flex" alignItems="center">
      <Text>{name} </Text>
      {descriptor && (
        <>
          <Box as="span" display="inline-block">
            <LongDashIcon />
          </Box>
          <Box as="span" textStyle="caption2">
            {" "}
            {descriptor}
          </Box>
        </>
      )}
      {extraDetails && (
        <Box as="span" textStyle="caption2" display="inline-block" ml={2} fontWeight={600}>
          {extraDetails}
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
