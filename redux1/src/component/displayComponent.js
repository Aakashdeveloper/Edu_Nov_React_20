import React from 'react';

const MoviesDisplay = (props) => {
    const renderMovies = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }
    return(
        <div>
            {renderMovies(props)}
        </div>
    )
}


export default MoviesDisplay