import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';
 
const QuickSearch = () => {
    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Search
                </p>
                <p className="quickSearchSubHeading">
                    Discover Trip With Us
                </p>
                <Link to="/">
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src=""/>
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading">
                                Heading
                            </div>
                            <div className="componentSubHeading">
                                SubHeading
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default QuickSearch;