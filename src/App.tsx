import { FC, useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Navigation from "./client/shared/components/Navigation/index";
import Header from "./client/shared/components/Header/index";
import { ITabItem } from "./client/shared/models";
import { fetchCharactersList } from "./client/apps/characters/api/index";
import { ROUTES } from "./client/shared/routes/consts";

const CharactersPage = lazy(
  () => import("./client/apps/characters/view/CharactersPage")
);

const AppRoutes: FC = () => (
  <BrowserRouter>
    <Suspense fallback={"...loading"}>
      <Switch>
        <Route exact path={ROUTES.CHARACTERS.PATH} component={CharactersPage} />
        <Redirect exact from={ROUTES.MAIN.PATH} to={ROUTES.CHARACTERS.PATH} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

const App: FC = ({ fetchCharactersList, characters }: any) => {
  const tabs: ITabItem[] = [{ label: "Characters" }, { label: "Episodes" }];

  useEffect(() => {
    fetchCharactersList();
  }, []);

  return (
    <div className="app">
      <Header title="Rick and Morty" />
      <Navigation {...{ tabs }} />
      <AppRoutes />
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
