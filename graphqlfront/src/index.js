import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:8600/graphql'
})

const GET_REST = gql`
    query product($id:Int){
        product(id:$id){
            name,
            rating_text,
            locality
        }
    }
`

class Products extends Component{
    constructor(){
        super()

        this.state={
            id:4,
            mydata:''
        }
    }
    render(){
        return(
            <Query query={GET_REST} client={client} variables={{id:this.state.id}}>
                {({loading,err,data}) => {
                    if(loading) return <p>Loading.....</p>
                    if(err) return <p>Err......</p>
                    return(
                        <div>
                            <h2>{data.product.name}</h2>
                            <h2>{data.product.rating_text}</h2>
                            <h2>{data.product.locality}</h2>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

ReactDOM.render(<Products/>,document.getElementById('root'));