import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';


import Layout from './components/Layout/Layout';

import Players from './containers/Players/Players';


class App extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div className="App">
    			<Layout>
    				<Players />
    			</Layout>
    		</div>
    	</BrowserRouter>
    );
  }
}

export default App;
