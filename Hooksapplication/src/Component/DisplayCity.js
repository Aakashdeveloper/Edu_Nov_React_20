import React from 'react';

function DisplayCity(props){
    
    const renderList = ({myCity})=>{
        if(myCity){
            return myCity.map((item) => {
                return(
                    <div>
                        <h2>{item.city_name}</h2>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h1>City List</h1>
            </center>
            {renderList(props)}
        </div>
    )
}

export default DisplayCity;