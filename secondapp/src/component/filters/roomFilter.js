import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component{
    filterRoom = (event) => {
        let roomNumber = event.target.value;
        let tripType = sessionStorage.getItem('tripId');
        let roomUrl;
        if(roomNumber == ''){
            roomUrl = `${rurl}/${tripType}`
        }else{
            roomUrl = `${rurl}/${tripType}/1?roomtype=${roomNumber}`
        }
        axios.get(roomUrl)
        .then((response) => {this.props.roomperType(response.data)})
        axios.get(roomUrl)
        .then((response) => {this.props.roomperType(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div onChange={this.filterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All 
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room 
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premium Room 
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room 
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Deluxe Room 
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default RoomFilter;