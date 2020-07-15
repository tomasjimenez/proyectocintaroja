import React from 'react';
import './App.css';
import Header from './components/Header';
import NuevoUsuario from './components/NuevoUsuario';
import Footer from './components/Footer';
import Login from './components/login';
import Profile from './components/Profile';
import CourseView from './components/CourseView';
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
          <Route exact path="/course" component={CourseView} />
          <Route exact path="/nuevousuario" component={NuevoUsuario} />
        </main>
        < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
