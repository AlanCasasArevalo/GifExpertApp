import React from 'react'

const GridItem = ({id, title, url}) => {

    // Animation came from https://animate.style/
    return (
        <div className="card animate__animated animate__flash">
            <img src={url} alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

export default GridItem;
