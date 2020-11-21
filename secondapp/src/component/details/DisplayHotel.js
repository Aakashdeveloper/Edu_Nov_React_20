import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HotelDisplay = (props) => {
    return(
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-11">
                            <h3>{props.hoteldata.name}</h3>
                        </div>
                        <div className="col-md-1">
                            <Link to={`/list/${sessionStorage.getItem('tripId')}`} className="btn btn-danger">Back</Link>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="img-responsive" src={props.hoteldata.thumb}
                            style={{width:1500,height:400}}/>
                        </div>
                        <div className="col-md-12">
                            <h3>{props.hoteldata.name}</h3>
                            <h3>{props.hoteldata.locality}</h3>
                            <h3>{props.hoteldata.address}</h3>
                        </div>
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Contact</Tab>
                                    <Tab>About</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <h2>About This Place</h2>
                                    <div>{props.hoteldata.name} is simply dummy text of the printing and typesetting industry. {props.hoteldata.name} has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing {props.hoteldata.name} passages, and more recently with desktop publishing software like Aldus PageMaker including versions of {props.hoteldata.name}.</div>
                                    <h3>Cost: Rs.{props.hoteldata.cost}</h3>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Contact Us</h2>
                                    <h3>Phone:465454756</h3>
                                </TabPanel>
                                <TabPanel>
                                    <h2>About Us</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <Link to={`/booking/${props.hoteldata._id}`} className="btn btn-success">Book Hotel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDisplay;