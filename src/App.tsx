import { FC, useEffect } from "react";
import { connect } from "react-redux";

import Navigation from "./client/shared/components/Navigation/index";
import Header from "./client/shared/components/Header/index";
import { ITabItem } from "./client/shared/models";
import { fetchCharactersList } from "./client/apps/Characters/api/index";

const App: FC = ({ fetchCharactersList, characters }: any) => {
  const tabs: ITabItem[] = [{ label: "Characters" }, { label: "Episodes" }];

  useEffect(() => {
    fetchCharactersList();
  }, []);

  return (
    <div className="app">
      <Header title="Rick and Morty" />
      <Navigation {...{ tabs }} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    characters: state.charactersData.characters,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCharactersList: () => dispatch(fetchCharactersList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
