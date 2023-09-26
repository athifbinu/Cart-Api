import React from 'react';
import Header from './components/Header/Header';
import Routes from "./Routes/Routers"
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header/>
       <Routes/>
       <Footer/>
    </div>
  );
}

export default App;
