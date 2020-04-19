import React from 'react';
import logo from './logo.svg';

import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloProvider} from "@apollo/react-hooks";

import client from './utils/gql-client';
import Home from './Home/home';
import BikePic from './BikePic/bikePic';
import './App.css';

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Home />
          <BikePic/>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
