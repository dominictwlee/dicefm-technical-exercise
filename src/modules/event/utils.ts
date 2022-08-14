import { DiceEvent } from "./types";

export function findAudioSource({ spotify_tracks, apple_music_tracks }: DiceEvent): string | null {
  return spotify_tracks[0]?.preview_url ?? apple_music_tracks[0]?.preview_url ?? null;
}
