import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

const QuickUrl = "https://developerfunnel.herokuapp.com/booking";

class QuickLogic extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }

    render(){
        return(
            <div>
                <QuickDisplay tripData={this.state.tripType}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(QuickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
    }
}

export default QuickLogic;