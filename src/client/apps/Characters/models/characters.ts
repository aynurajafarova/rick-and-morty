export interface ICharacterInfo {
  count?: number;
  next?: string;
  pages?: number;
  prev?: string;
}

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
  info?: ICharacterInfo;
  results?: ICharacterItem[];
}
