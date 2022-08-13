import { Currency } from "dinero.js";

export interface DiceEvent {
  age_limit: string;
  sale_end_date: string;
  raw_description: string;
  status: string;
  images: string[];
  apple_music_tracks: {
    open_url: string;
    preview_url: string;
    title: string;
  }[];
  event_images: {
    brand: null;
    landscape: string;
    portrait: string;
    square: string;
  };
  name: string;
  presented_by: string;
  genre_tags: string[];
  hash: string;
  venue: string;
  detailed_artists: {
    headliner: true;
    id: number;
    name: string;
  }[];
  type: string;
  price: null;
  venues: {
    city: {
      code: string;
      country_alpha3: string;
      country_id: string;
      country_name: string;
      id: string;
      name: string;
    };
    id: number;
    name: string;
  }[];
  url: string;
  address: string;
  announcement_date: string;
  currency: Currency;
  id: string;
  spotify_tracks: {
    open_url: string;
    preview_url: string;
    title: string;
  }[];
  show_price_breakdown: true;
  ticket_types: {
    id: number;
    name: string;
    price: {
      face_value: number;
      fees: number;
      total: number;
    };
    sold_out: true;
  }[];
  external_url: null;
  promoters: {
    id: number;
    name: string;
  }[];
  int_id: number;
  destination_event_perm_name: null;
  type_tags: string[];
  cities: {
    code: string;
    country_alpha3: string;
    country_id: string;
    country_name: string;
    id: string;
    name: string;
  }[];
  checksum: string;
  featured: true;
  sold_out: true;
  date: string;
  date_end: string;
  location: {
    accuracy: number;
    city: string;
    country: string;
    lat: number;
    lng: number;
    place: string;
  };
  flags: string[];
  perm_name: string;
  links: string[];
  artists: string[];
  timezone: string;
  tags: string[];
  destination_event_id: null;
  sale_start_date: string;
  lineup: {
    details: string;
    time: string;
  }[];
  linkout_type: null;
  description: string;
}

export interface GetDiceEventsResponse {
  data: DiceEvent[];
  links: {
    next: string;
    self: string;
  };
}
