import { ICharacters } from "../../apps/characters/models";
import { IEpisodes } from "../../apps/episodes/models";

export interface IInitialState {
  loading?: boolean;
  error?: string;
}

export interface ICharactersState extends IInitialState {
  characters: ICharacters;
}

export interface IEpisodesState extends IInitialState {
  episodes: IEpisodes;
}

export interface IEpisodesData {
  episodesData: IEpisodesState;
}

export interface ICharactersData {
  charactersData: ICharactersState;
}
