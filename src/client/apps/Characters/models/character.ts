import { IResponseInfo } from "../../../shared/models/index";

export interface ICharacterItemOrigin {
  name?: string;
  url?: string;
}

export interface ICharacterItemLocation extends ICharacterItemOrigin {}

export interface ICharacterItem {
  created?: string;
  episode?: string[];
  gender?: string;
  id?: number;
  image?: string;
  location?: ICharacterItemLocation;
  name?: string;
  origin?: ICharacterItemOrigin;
  species?: string;
  status?: string;
  type?: string;
  url?: string;
}

export interface ICharacters {
  info?: IResponseInfo;
  results?: ICharacterItem[];
}

export interface ICharactersListAPI {
  page?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}
