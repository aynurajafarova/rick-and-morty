import { Dispatch, FC, useEffect, useState } from "react";
import { connect } from "react-redux";

import { IAction } from "../../../shared/models";
import { IEpisodesData, IEpisodesState } from "../../../shared/models/reducer";
import { fetchEpisodesList } from "../api";
import { IEpisodes, IEpisodesListAPI } from "../models";
import EpisodesListTable from "../components/EpisodesListTable/index";
import Pagination from "../../../shared/components/Pagination/index";
import Loader from "../../../shared/components/Loader";

interface IProps {
  fetchEpisodesList(
    params: IEpisodesListAPI
  ): (dispatch: Dispatch<IAction>) => void;
  episodes?: IEpisodes;
  loading?: boolean;
}

const EpisodesPage: FC<IProps> = ({ fetchEpisodesList, episodes, loading }) => {
  const [params, setParams] = useState<IEpisodesListAPI>({
    name: "",
    page: 1,
  });

  useEffect(() => {
    fetchEpisodesList(params);
  }, [params]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <EpisodesListTable episodes={episodes?.results} />
          {episodes?.info?.pages && (
            <Pagination
              count={episodes?.info?.pages}
              {...{ params, setParams }}
            />
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: IEpisodesData) => {
  const episodesData: IEpisodesState = state.episodesData;
  return {
    episodes: episodesData.episodes,
    loading: episodesData.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEpisodesList: (params: IEpisodesListAPI) =>
      dispatch(fetchEpisodesList(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
