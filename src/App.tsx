import { FC } from "react";

import Navigation from "./client/shared/components/Navigation/index";
import Header from "./client/shared/components/Header/index";
import { ITabItem } from "./client/shared/models";

const App: FC = () => {
  const tabs: ITabItem[] = [{ label: "Characters" }, { label: "Episodes" }];

  return (
    <div className="app">
      <Header title="Rick and Morty" />
      <Navigation {...{ tabs }} />
    </div>
  );
};

export default App;
