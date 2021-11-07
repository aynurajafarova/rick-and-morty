import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./client/shared/components/Header/index";
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
  return (
    <div className="app">
      <Container maxWidth="lg">
        <Header title="Rick and Morty" />
        <AppRoutes />
      </Container>
    </div>
  );
};

export default App;
