import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import GridItem from "./GridItem";
import {getGifs} from "../helpers/get-gifs";

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    // Esto sirve para poder llamar a la funcion de obtener los gifs pero solo la primera vez que se ejecuta el componente
    useEffect(() => {
        getGifs(category)
            .then( setImages )
    }, [category])



    return (
        <>
            <h3>{category}</h3>
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
