import React from 'react';
import './App.css';
import UserCase from "../../core/Shared/Domain/UserCase/UserCase";
import {container} from '../confg/dependency-injection/inversify.config';
import {TYPES} from "../../core/types";

import LayoutItemCreatorForm from "./components/LayoutItemCreatorForm/LayoutItemCreatorForm";

const App = () => {
  return(
      <div>
        <LayoutItemCreatorForm layoutItemCreator={container.get<UserCase>(TYPES.LAYOUT_ITEM_CREATOR)} />
      </div>
  )
}

export default App;
