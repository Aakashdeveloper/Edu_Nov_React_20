import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'Edureka React with AWS',
            keyword:'User Input Here'
        }
    }

    handleChange = (event) => {
        //console.log(event)
        //console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Input Here'})
        this.props.userText(event.target.value);
    }

    render(){
        console.log("Inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input type="text" onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
    
}

export default Header;