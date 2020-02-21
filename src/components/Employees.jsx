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


    render(props){
        const Background = {
            backgroundColor: '#CDDCDC',
            backgroundImage: 'radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%)',
            backgroundBlendMode: 'screen, overlay'
        }
        
        const Box = {
            width: '80%',
            padding: '30px',
            border: '1px solid #efefef',
            margin: '0 auto',
            display: 'flex'
        }

        const Center = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        const titleAlign = {
            textAlign: 'center'
        }

        let displayMe;
        if(this.state.whatToShow === true){
            displayMe = <BeerList beerList={this.props.beerList} />;
        } else if(this.state.whatToShow === false){
            displayMe = <AddBeerForm onAddingBeersToMaster={this.props.onAddingBeersToMaster}/>;
        }
       

        return(
            <div style={Background}>
            <div style={Box}>
                <h3 style={titleAlign}>Beer List</h3>
                <img src={Beer} alt="beer list" style={Center} onClick={() => this.displayList()}/>
            </div>
            <div style={Box}>
                <h3>Add a new Beer to the list</h3>
                <img src={Form} alt="add a new beer" style={Center} onClick={() => this.displayForm()}/>
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