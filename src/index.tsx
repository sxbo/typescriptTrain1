import * as React from "react";
import * as ReactDOM from 'react-dom';

import Hello from "./components/Hello";
import {createStore} from 'redux';
import {enthusiasm} from './types/Reducers'
import {StoreState} from './types/Store'
import {Provider} from 'react-redux'


const store = createStore<StoreState>(enthusiasm,{
    enthusiasmlevel:1,
    languageName:'TypeScript',
});


ReactDOM.render(
    <Provider store={store}>
        <Hello name="TypeScript" />
    </Provider>,
    document.getElementById('app') as HTMLElement
);