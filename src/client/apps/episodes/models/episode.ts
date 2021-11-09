import { IResponseInfo } from "../../../shared/models/index";

export interface IEpisodeItem {
  id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: string[];
  url?: string;
  created?: string;
}

export interface IEpisodes {
  info?: IResponseInfo;
  results?: IEpisodeItem[];
}

export interface IEpisodesListAPI {
  page?: number;
  name?: string;
}
