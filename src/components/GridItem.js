import React from 'react'
import PropTypes from 'prop-types'

// const GridItem = ({category}) => {
const GridItem = ({id, title, url }) => {

    // const [images, setImages] = useState([])

    return (
        <div>
            <h3>{title}</h3>
            <img src={url} alt={title}/>
        </div>
    )
}

GridItem.propTypes = {
    image: PropTypes.object.isRequired,
}

export default GridItem;
