import { FC, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./client/shared/components/Header/index";
import { ROUTES } from "./client/shared/routes/consts";

const CharactersPage = lazy(
  () => import("./client/apps/characters/view/CharactersPage")
);
const EpisodesPage = lazy(
  () => import("./client/apps/episodes/view/EpisodesPage")
);

const AppRoutes: FC = () => (
  <Router>
    <Header title="Rick and Morty" />
    <Suspense fallback={"...loading"}>
      <Switch>
        <Route exact path={ROUTES.CHARACTERS.PATH} component={CharactersPage} />
        <Route exact path={ROUTES.EPISODES.PATH} component={EpisodesPage} />
        <Redirect exact from={ROUTES.MAIN.PATH} to={ROUTES.CHARACTERS.PATH} />
      </Switch>
    </Suspense>
  </Router>
);

const App: FC = () => {
  return (
    <div className="app">
      <Container maxWidth="lg">
        <AppRoutes />
      </Container>
    </div>
  );
};

export default App;
