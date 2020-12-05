import React from 'react'
import PropTypes from 'prop-types'
import {useFetchGifs} from "../hooks/useFetchGifs";
import GridItem from "./GridItem";

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category)

    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>

            {loading && <p>Cargando ....</p>}

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
