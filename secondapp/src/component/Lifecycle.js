//Get initial state
//Set Initial state
//Before get created
//render
//After get created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //1 Get Initial State
    constructor(props){
        super()

        //2 Set Initial State
        this.state={
            title:'LifeCycle'
        }

        console.log("11111//22222>>> inside constructor")
    }

    componentWillUpdate(){
        console.log("f>>> inside componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("f>>> inside componentDidUpdate")
    }

    //3 Before get created
    UNSAFE_componentWillMount(){
        console.log("3333>>> inside componentWillMount")
    }

    //
    shouldComponentUpdate(nextProps,nextState){
        console.log("3333>>> inside shouldComponentUpdate")
        if(nextState.title == this.state.title){
            return false
        }else{
            return true
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log(">>>>>inside getDerivedStateFromProps  state",state )
        console.log(">>>>>inside getDerivedStateFromProps props",props )
    }

    //4 render
    render(){
        console.log("44444>>> inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success" onClick={() => {this.setState({title:'Something Else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    //5 After get created
    componentDidMount(){
        console.log("3333>>> inside componentDidMount")
    }

    //n
    componentWillUnmount(){
        alert("Do you want to leave")
    }


}

export default LifeCycle;