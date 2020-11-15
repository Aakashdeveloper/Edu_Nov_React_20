import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';
 
const QuickSearch = (props) => {

    const tripRender = ({tripData}) => {
        if(tripData){
            return tripData.map((item) => {
                return(
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start your {item.name} trip with us.
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Search
                </p>
                <p className="quickSearchSubHeading">
                    Discover Trip With Us
                </p>
                <br/>
                {tripRender(props)}
            </div>
        </div>
    )
}

export default QuickSearch;