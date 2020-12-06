import React, { Component } from 'react';
import TableRow from './TableRow';

class StockList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stocks: [
            {
                id: 1,
                name: 'TCS'
                    
            },
            {
                id: 2,
                name: 'Infosys'
            },
            {
                id: 3,
                name: 'Reliance'
            }
          ]
        };
      }
      
      tabRow(){
        if(this.state.stocks instanceof Array){
          return this.state.stocks.map(function(object, i){
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
                  <td>Stock Name</td>
                  <td>Stock Price</td>
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
export default StockList;