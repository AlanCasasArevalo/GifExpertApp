import React from 'react'
import PropTypes from 'prop-types'

const GridItem = ({ title, url}) => {

    // Animation came from https://animate.style/
    return (
        <div className="card animate__animated animate__flash">
            <img
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}


GridItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

export default GridItem;
