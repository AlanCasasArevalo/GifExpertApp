import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    // Esto sirve para poder llamar a la funcion de obtener los gifs pero solo la primera vez que se ejecuta el componente
    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async () => {
        const apiKey = 'YOUR_API_KEY';
        const urlToCall = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`
        const resp = await fetch(urlToCall);
        const {data} = await resp.json();

        const gifs = data.map(image => {
            return {
                id: image.id,
                title: image.title,
                url: image.images?.downsized_medium.url
            }
        })

        console.log(gifs)

        setImages(gifs)
    }

    return (
        <>
            <h3>{category}</h3>
            {
                images.map(({id, title}) =>
                    (<li key={id}> {title} </li>)
                )
            }
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
