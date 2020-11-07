import React from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutItemCreator from "../../core/LayoutItem/Application/LayoutItemCreator";
import Column from "../../core/Shared/Domain/ValueObjects/Column";
import Row from "../../core/Shared/Domain/ValueObjects/Row";
import {container} from '../confg/dependency-injection/inversify.config';
import {TYPES} from "../../core/types";

function App() {
  const click = async () => {
    const action: LayoutItemCreator = container.get<LayoutItemCreator>(TYPES.LAYOUT_ITEM_CREATOR)
    const obj = {
      name: "works!",
      rows: new Row(5),
      cols: new Column(5)
    }
    await action.run(obj);
    console.log('Created');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={click}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={click}>test</button>
      </header>
    </div>
  );
}

export default App;
