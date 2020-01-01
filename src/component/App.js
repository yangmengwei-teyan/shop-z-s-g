import React, { Component } from 'react';
 import Header from './Home'
 import '../App.css'
 import store from '../store'
 import {Provider} from 'react-redux'
class App extends Component {
    render() {
        return (
          <div className="App">
            <Provider store={store}>
              <Header></Header>
            </Provider>
           
          </div> 
        );
    }
}

export default App;