import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Customers from './components/Customers';
import Employees from './components/Employees';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Splash} />
          <Route path='/customers' component={Customers} />
          <Route path='/employees' component={Employees} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
