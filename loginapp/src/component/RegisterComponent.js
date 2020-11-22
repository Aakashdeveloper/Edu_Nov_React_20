import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "http://localhost:5000/api/auth/register";

class RegisterComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleChangeName = (event) => {
        this.setState({name:event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
    }


    handleSubmit = () => {
        console.log(this.state)
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login?message=success'))
        //.catch(this.props.history.push('/login?message=fail'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" value={this.state.name} className="form-control" 
                            onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" value={this.state.email} className="form-control" 
                            onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" value={this.state.password} className="form-control"
                             onChange={this.handleChangePassword}/>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;