import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';

const listUrl = "https://developerfunnel.herokuapp.com/hotellist"

class ListingApi extends Component{

    constructor(){
        super()

        this.state={
            listData:''
        }
    }

    setDataPerFilter(sortedData){
        this.setState({listData:sortedData})
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <RoomFilter roomperType={(data)=>{this.setDataPerFilter(data)}} tripid={10}/>
                        <CostFilter roomPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listRecord={this.state.listData}/>
                    </div>
                </div>
                
            </div>
        )
    }

    componentDidMount(){
        var tripId = this.props.match.params.id;
        sessionStorage.setItem('tripId',tripId)
        axios.get(`${listUrl}/${tripId}`)
        .then((response) => {this.setState({listData:response.data})})
    }
}

export default ListingApi;