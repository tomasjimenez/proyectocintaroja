import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import login from './components/login';
import Profile from './components/Profile';
<<<<<<< HEAD
import CourseView from './components/CourseView';
import { BrowserRouter, Route } from 'react-router-dom';
=======
>>>>>>> 2fbb25b6f13415269cf0ce804c9aa33d628dd60a
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
          <Route exact path="/categories" component={CategoryContainer} />
          <Route exact path="/login" component={login} />
          <Route exact path="/course" component={CourseView} />
        </main>
        < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
