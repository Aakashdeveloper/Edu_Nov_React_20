import React,{Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "http://localhost:5000/api/auth/users";

class UserList extends Component {
    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        return(
            <div>
                <UserDisplay userData={this.state.users}/>
            </div>
        )
    }
   
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {this.setState({users:data})})
    }
}

export default UserList