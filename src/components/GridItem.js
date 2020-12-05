import React from 'react'
import PropTypes from 'prop-types'

// const GridItem = ({category}) => {
const GridItem = ({id, title, url }) => {

    // const [images, setImages] = useState([])

    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
//
// GridItem.propTypes = {
//     image: PropTypes.object.isRequired,
// }

export default GridItem;
