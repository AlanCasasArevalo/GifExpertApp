import React from 'react'
import PropTypes from 'prop-types'
import {useFetchGifs} from "../hoooks/useFetchGifs";
import GridItem from "./GridItem";

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>'Cargando ....'</p>}

            <div className="card-grid">
                {
                    images.map((image) =>
                        (
                            <GridItem
                                key={image.id}
                                {...image}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
