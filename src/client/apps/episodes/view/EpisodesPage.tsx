import { Dispatch, FC, useEffect } from "react";
import { connect } from "react-redux";

import { IAction } from "../../../shared/models";
import { IEpisodesData, IEpisodesState } from "../../../shared/models/reducer";
import { fetchEpisodesList } from "../api";
import { IEpisodes } from "../models";
import EpisodesListTable from "../components/EpisodesListTable/index";

interface IProps {
  fetchEpisodesList(): (dispatch: Dispatch<IAction>) => void;
  episodes: IEpisodes;
}

const EpisodesPage: FC<IProps> = ({ fetchEpisodesList, episodes }) => {
  useEffect(() => {
    fetchEpisodesList();
  }, []);

  return <EpisodesListTable episodes={episodes?.results!} />;
};

const mapStateToProps = (state: IEpisodesData) => {
  const episodesData: IEpisodesState = state.episodesData;
  return {
    episodes: episodesData.episodes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEpisodesList: () => dispatch(fetchEpisodesList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
