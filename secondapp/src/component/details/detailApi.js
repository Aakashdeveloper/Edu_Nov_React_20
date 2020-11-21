import React,{Component} from 'react';
import axios from 'axios';
import DisplayHotel from './DisplayHotel'

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:'',
        }
    }

    render(){
        return(
           <DisplayHotel hoteldata={this.state.details}/>
        )
    }

    async componentDidMount(){
        let hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        sessionStorage.setItem('hotelName',response.data[0].name)
        this.setState({details:response.data[0]})
    }
    
}

export default Details;