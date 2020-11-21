import React,{Component} from 'react';
import BookingDisplay from './DisplayBooking';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/allBooking";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                 <p>Your Booking is {this.props.location.search.split('=')[1]}</p>
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get(url);
        this.setState({booking:response.data})
    }
}

export default Booking;