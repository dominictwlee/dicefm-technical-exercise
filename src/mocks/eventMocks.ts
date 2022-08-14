import { DiceEvent, GetDiceEventsResponse } from "@/modules/event/types";
import { Currency } from "dinero.js";

export function createMockEvent(overrides: Partial<DiceEvent> = {}) {
  return {
    price: null,
    promoters: [
      {
        id: 555,
        name: "QM Records",
      },
    ],
    description: "blah",
    venue: "The Waiting Room",
    links: [],
    announcement_date: "2022-07-13T10:00:00Z",
    currency: "GBP" as Currency,
    date_end: "2022-08-18T22:00:00Z",
    spotify_tracks: [
      {
        open_url: "https://open.spotify.com/track/27dXvoAZYdmAlHknFeNTgu",
        preview_url:
          "https://p.scdn.co/mp3-preview/935190397ff41e42a135aedba59a70fb647cc680?cid=921526b9c2da4b7b96e197790a02347e",
        title: "bukky sky - in the water",
      },
    ],
    sold_out: false,
    type_tags: ["music:gig"],
    external_url: null,
    raw_description: "blah",
    id: "62ce9f1114be3e00018da864",
    artists: ["Flo Gallop", "Eldr", "Bukky Sky"],
    hash: "2pqqa",
    apple_music_tracks: [
      {
        open_url:
          "https://music.apple.com/us/album/in-the-water/1629651193?i=1629651194&uo=4&at=1001ld8Z&ct=app_event",
        preview_url:
          "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/dc/ae/b1/dcaeb1cb-fe5f-f7a8-2ba0-e2d3165fab64/mzaf_9238031074407516378.plus.aac.p.m4a",
        title: "bukky sky - in the water",
      },
    ],
    name: "Bukky Sky w/ Flo Gallop, ELDR",
    date: "2022-08-18T18:30:00Z",
    presented_by: "Presented by QM Records.",
    int_id: 150862,
    checksum: "45967823BE69D79AF66A32C095F0192B",
    event_images: {
      brand: null,
      landscape:
        "https://dice-media.imgix.net/attachments/2022-07-28/2c18791a-f9ab-447a-a6b3-804d1b4b8b20.jpg?rect=0%2C320%2C1600%2C960",
      portrait:
        "https://dice-media.imgix.net/attachments/2022-07-28/2c18791a-f9ab-447a-a6b3-804d1b4b8b20.jpg?rect=360%2C0%2C880%2C1600",
      square:
        "https://dice-media.imgix.net/attachments/2022-07-28/2c18791a-f9ab-447a-a6b3-804d1b4b8b20.jpg?rect=0%2C0%2C1600%2C1600",
    },
    status: "on-sale",
    detailed_artists: [
      {
        headliner: false,
        id: 37345,
        name: "Flo Gallop",
      },
      {
        headliner: false,
        id: 55269,
        name: "Eldr",
      },
      {
        headliner: false,
        id: 31381,
        name: "Bukky Sky",
      },
    ],
    linkout_type: null,
    show_price_breakdown: false,
    age_limit: "This is an 18+ event",
    sale_end_date: "2022-08-18T20:00:00Z",
    type: "event",
    ticket_types: [
      {
        id: 261293,
        name: "General Admission",
        price: {
          face_value: 700,
          fees: 100,
          total: 800,
        },
        sold_out: false,
      },
    ],
    cities: [
      {
        code: "london",
        country_alpha3: "GBR",
        country_id: "54d8a87238fe5d27d500988a",
        country_name: "United Kingdom",
        id: "54d8a23438fe5d27d500001c",
        name: "London",
      },
    ],
    images: [
      "https://dice-media.imgix.net/attachments/2022-07-28/2c18791a-f9ab-447a-a6b3-804d1b4b8b20.jpg",
    ],
    venues: [
      {
        city: {
          code: "london",
          country_alpha3: "GBR",
          country_id: "54d8a87238fe5d27d500988a",
          country_name: "United Kingdom",
          id: "54d8a23438fe5d27d500001c",
          name: "London",
        },
        id: 41,
        name: "The Waiting Room",
      },
    ],
    address: "175 Stoke Newington High Street, London N16 0LH",
    perm_name: "bukky-sky-w-flo-gallop-eldr-18th-aug-the-waiting-room-london-tickets",
    lineup: [
      {
        details: "Doors open",
        time: "7:30 PM",
      },
      {
        details: "Bukky Sky",
        time: "",
      },
      {
        details: "Eldr",
        time: "",
      },
      {
        details: "Flo Gallop",
        time: "",
      },
    ],
    url: "https://link.dice.fm/G0013ba1baa3",
    destination_event_id: null,
    flags: ["qr-code", "going_ahead"],
    timezone: "Europe/London",
    location: {
      accuracy: 0,
      city: "London",
      country: "United Kingdom",
      lat: 51.5620818,
      lng: -0.0738883999999871,
      place: "Europe/London",
    },
    sale_start_date: "2022-07-13T11:00:00Z",
    genre_tags: ["gig:alt-rnb", "gig:rock", "gig:experimental", "gig:pop", "gig:alternative"],
    featured: false,
    destination_event_perm_name: null,
    tags: [],
    ...overrides,
  };
}

export function createMockDiceEventResponse(
  events: DiceEvent[],
  links: Partial<GetDiceEventsResponse["links"]> = {}
) {
  return {
    data: events,
    links: {
      next: "https://events-api.dice.fm/v1/events?filter[venues]=The+Waiting+Room&page[number]=2&page[size]=1",
      self: "https://events-api.dice.fm/v1/events?filter[venues]=The+Waiting+Room&page[size]=1",
      ...links,
    },
  };
}
