import React from 'react';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import CategoryContainer from './containers/CategoryContainer';
import Home from './containers/Home';
import { BrowserRouter, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/categories" component={CategoryContainer} />
          <Route exact path="/login" component={login} />
        </main>
        < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
