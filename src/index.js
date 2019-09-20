import React  from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/index'
import AppRouter from './routers/Approuter';

ReactDOM.render(<Provider store ={createStore(reducer)}>
                    <AppRouter />
                </Provider>,
                document.getElementById('root'));