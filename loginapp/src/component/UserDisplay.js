import React from 'react';

const UserDisplay = (props) => {
    const renderUser = ({userData}) => {
        if(userData){
            return userData.map((item,index) => {
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>List Of Users</h2>
            </center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUser(props)}
                </tbody>

            </table>
        </div>
    )
}



export default UserDisplay;