import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions/actions_file';
import PropTypes from 'prop-types';
import DisplayComponent from '../component/displayComponent'


class Home extends Component{
    //View is calling action > stage one    
    componentDidMount(){
        this.props.dispatch(moviesList(1))
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }
}

//here we will receive the state from the store
function mapStateToProp(state){
    //console.log(state)
    return{
        mydata:state.films
    }
}

// inherit dispatch for home
//dispatch is not default available we have to inherit from package PropTypes packages
Home.protoTypes={
    dispatch:PropTypes.func 
}

export default connect(mapStateToProp)(Home)