import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="


class Search extends Component {
    //1
    constructor(){
        super()
        this.state={
            location:'',
            hotels:''
        }
    }

    // To display City
    renderCity = (data) => {
        console.log("data>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    //To display hotel wrt to city
    renderHotel = (data) => {
        console.log("hotel>>>",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.city_name}
                    </option>
                )
            })
        }
    }

    // TO display Hotel wrt to city
    handleCity =(event)=>{
        const cityId = event.target.value;
        const url = hurl+cityId
        fetch(hurl+cityId,{method:'GET'})
        .then((res) => res.json())
        //.then((data) => {console.log(data)})
        .then((data) => {this.setState({hotels:data})})
    }

    handleHotel = (event) => {
        console.log(this.props)
        this.props.history.push(`/details/${event.target.value}`)
    }

    //2
    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    <b>D!</b>
                </div>
                <div className="heading">
                    Plan Your trip with Us
                </div>
                <div className="locationSelector">
                    
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>----SELECT CITY-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handleHotel}>
                        <option>----SELECT HOTEL-----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    //3 page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({location:data})})
        .catch((err) => console.log(err.code))
    }
    
}

export default withRouter(Search);