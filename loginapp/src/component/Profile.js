import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component {
    constructor(){
        super()

        this.state={
            user:''
        }
    }
    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        this.props.history.push('/login');
    }
    render(){
        if(sessionStorage.getItem('ltk') == null){
            this.props.history.push('/login')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    Profile
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your email id is {this.state.user.email}</h2>
                    <h2>Your role is {this.state.user.role}</h2>

                    <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile;