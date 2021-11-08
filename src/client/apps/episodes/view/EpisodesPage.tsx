import { Dispatch, FC, useEffect, useState } from "react";
import { connect } from "react-redux";

import { IAction } from "../../../shared/models";
import { IEpisodesData, IEpisodesState } from "../../../shared/models/reducer";
import { fetchEpisodesList } from "../api";
import { IEpisodes } from "../models";
import EpisodesListTable from "../components/EpisodesListTable/index";
import Pagination from "../../../shared/components/Pagination/index";

interface IProps {
  fetchEpisodesList(page: number): (dispatch: Dispatch<IAction>) => void;
  episodes: IEpisodes;
}

const EpisodesPage: FC<IProps> = ({ fetchEpisodesList, episodes }) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchEpisodesList(page);
  }, [page]);

  return (
    <>
      <EpisodesListTable episodes={episodes?.results!} />
      <Pagination count={episodes?.info?.pages} {...{ page, setPage }} />
    </>
  );
};

const mapStateToProps = (state: IEpisodesData) => {
  const episodesData: IEpisodesState = state.episodesData;
  return {
    episodes: episodesData.episodes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEpisodesList: (page: number) => dispatch(fetchEpisodesList(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
