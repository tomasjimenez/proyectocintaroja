import React from 'react';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import CategoryContainer from './containers/CategoryContainer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <main>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
        </main>

        < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
