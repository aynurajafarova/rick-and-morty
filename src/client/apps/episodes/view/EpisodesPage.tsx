import { ChangeEvent, Dispatch, FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";

import { IAction } from "../../../shared/models";
import { IEpisodesData, IEpisodesState } from "../../../shared/models/reducer";
import { fetchEpisodesList } from "../api";
import { IEpisodes, IEpisodesListAPI } from "../models";
import EpisodesListTable from "../components/EpisodesListTable/index";
import Pagination from "../../../shared/components/Pagination/index";
import Loader from "../../../shared/components/Loader";
import Input from "../../../shared/components/Input";
import ErrorCard from "../../../shared/components/ErrorCard";

interface IProps {
  fetchEpisodesList(
    params: IEpisodesListAPI
  ): (dispatch: Dispatch<IAction>) => void;
  episodes?: IEpisodes;
  loading?: boolean;
  error?: string;
}

const EpisodesPage: FC<IProps> = ({
  fetchEpisodesList,
  episodes,
  loading,
  error,
}) => {
  const [params, setParams] = useState<IEpisodesListAPI>({
    name: "",
    page: 1,
  });

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setParams((prevState: IEpisodesListAPI) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  useEffect(() => {
    fetchEpisodesList(params);
  }, [params]);

  return (
    <>
      <Box sx={{ display: "flex", marginTop: 3, marginBottom: 6 }}>
        <Input label="Name" onChange={handleChangeName} />
      </Box>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorCard />
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
    error: episodesData.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEpisodesList: (params: IEpisodesListAPI) =>
      dispatch(fetchEpisodesList(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
