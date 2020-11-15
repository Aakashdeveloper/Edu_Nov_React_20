import React from 'react';

const NewsDisplay = (props) => {
    console.log(props)
    const renderList = props.datalist.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}

export default NewsDisplay