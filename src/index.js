import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import CollectionStore from "./store/CollectionStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        collection: new CollectionStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

