import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Customers from './components/Customers';
import Employees from './components/Employees';
import { Route, HashRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterBeerList : [],
    };
    this.handleAddingBeersToMaster = this.handleAddingBeersToMaster.bind(this);
  }

  handleAddingBeersToMaster(newBeer){
    let newMasterBeerList = this.state.masterBeerList;
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <HashRouter>
        <div>
          <Header />
          <NavBar />
            <div>
              <Route exact path='/' component={Splash} />
              <Route path='/customers' component={Customers} />
              <Route path='/employees' render={() => <Employees onAddingBeersToMaster={this.handleAddingBeersToMaster}
              beerList={this.state.masterBeerList}/> } />
            </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
