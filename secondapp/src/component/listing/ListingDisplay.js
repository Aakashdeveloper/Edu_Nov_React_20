import React from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';

const ListingDisplay = (props) => {
    const renderList = ({listRecord}) => {
        if(listRecord){
            return listRecord.map((item) => {
                return(
                    <div className="Item" key={item._id}>
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="Image" src={item.thumb}/>
                        </div>
                        <div className="col-sm-7">
                            <div className="hotel_name">
                                <Link to={`/details/${item._id}`}>{item.name}</Link>
                                <div className="city_name">{item.city_name}</div>
                                <div className="address-text">{item.locality}</div>
                                <div className="address-text">{item.address}</div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                             <div class="col-sm-3">
                                 <div class="cuisine">Room Type</div>
                                 <div class="cuisine">COST FOR Night</div>
                             </div>
                             <div class="col-sm-9">
                                 <div class="cuisine_data">
                                     {item.type[0].name},{item.type[1].name},{item.type[2].name}</div>
                                 <div class="cuisine_data">Rs {item.cost}</div>
                             </div>
                     </div>
                </div>
                )
            })
        }else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }

    return(
        <div className="container-fluid">
            <div className="main-heading">
                    <div className="row">
                        <div className="col-md-12">
                            {renderList(props)}
                        </div>
                    </div>
            </div>
        </div>
    )
}   

export default ListingDisplay