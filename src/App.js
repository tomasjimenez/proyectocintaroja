import React from 'react';
import CardContainer from './containers/CardContainer';
import './App.css';
import login from './components/login';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header />
      <CardContainer />
      < Footer />
    </div>
  );
}

export default App;
