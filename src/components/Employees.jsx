import React from 'react';
import PropTypes from 'prop-types';
import Form from '../assets/images/form.png';
import Beer from '../assets/images/beer.png';
import AddBeerForm from './AddBeerForm';
import BeerList from './BeerList';

class Employees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            whatToShow: null
        }
       this.displayForm = this.displayForm.bind(this);
       this.displayList = this.displayList.bind(this);
    }
    
    displayList(){
        this.setState({whatToShow : true});
    }
    displayForm(){
        this.setState({whatToShow : false});
    }


    render(){
        const Background = {
            backgroundColor: '#CDDCDC',
            backgroundImage: 'radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%)',
            backgroundBlendMode: 'screen, overlay'
        }

        let displayMe;
        if(this.state.whatToShow === true){
            displayMe = <BeerList />;
        } else if(this.state.whatToShow === false){
            displayMe = <AddBeerForm />;
        }
       

        return(
            <div style={Background}>
            <div>
                <img src={Beer} alt="beer list" onClick={() => this.displayList()}/>
                <h3>Beer List</h3>
            </div>
            <div onClick={() => this.displayForm()}>
                <img src={Form} alt="add a new beer"/>
                <h3>Add a new Beer to the list</h3>
            </div>
            {displayMe}
            </div>  
        );
    }
}

Employees.propTypes = {
    onAddingBeersToMaster : PropTypes.func.isRequired,
    beerList : PropTypes.array.isRequired
}

export default Employees;