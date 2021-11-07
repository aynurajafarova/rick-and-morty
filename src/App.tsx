import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Container } from "@mui/material";

import Navigation from "./client/shared/components/Navigation/index";
import Header from "./client/shared/components/Header/index";
import { ITabItem } from "./client/shared/models";
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

const App: FC = () => {
  const tabs: ITabItem[] = [{ label: "Characters" }, { label: "Episodes" }];

  return (
    <div className="app">
      <Header title="Rick and Morty" />
      <Navigation {...{ tabs }} />
      <Container maxWidth="lg">
        <AppRoutes />
      </Container>
    </div>
  );
};

export default App;
