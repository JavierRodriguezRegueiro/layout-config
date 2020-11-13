import React from 'react';
import logo from './logo.svg';
import './App.css';
import Column from "../../core/LayoutItem/Domain/Column";
import Row from "../../core/LayoutItem/Domain/Row";
import UserCase from "../../core/Shared/Domain/UserCase/UserCase";
import LayoutItemId from "../../core/LayoutItem/Domain/LayoutItemId";
import {container} from '../confg/dependency-injection/inversify.config';
import {TYPES} from "../../core/types";

function App() {
  const click = async () => {
    const action: UserCase = container.get<UserCase>(TYPES.LAYOUT_ITEM_CREATOR)
    await action.run(new LayoutItemId(), "works!", new Row(5), new Column(5));
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
