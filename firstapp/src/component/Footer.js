import React from 'react'

const Footer = (props) => {
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h2>&copy; Developer Funnel {props.year} {props.month}</h2>
            </center>
        </React.Fragment>
    )
}

export default Footer;