import React,{Component} from 'react';

class BaseButton extends Component {
    constructor(){
        super()

        this.state={
            name:''
        }
    }

    onClick=()=>{
        this.setState({name:'Some Thing else'})
    }
    
    render(){
        return(
            <div>
                <button className="btn btn-success" onClick={this.onClick}>
                    {this.state.name}
                </button>
            </div>
        )
    }
}

export default BaseButton