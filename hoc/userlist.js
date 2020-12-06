// UserList.js

import React, { Component } from 'react';
import TableRow from './TableRow';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [
            {
                id: 1,
                name: 'Krunal'
                  
            },
            {
                id: 2,
                name: 'Ankit'
            },
            {
                id: 3,
                name: 'Rushabh'
            }
          ]
        };
      }
      
      tabRow(){
        if(this.state.users instanceof Array){
          return this.state.users.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
        );
      }
}
export default UserList;