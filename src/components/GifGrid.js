import React from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({category}) => {
    // const [inputValue, setInputValue] = useState('')

    const getGifs = async () => {
        const apiKey = 'irpbY8APMlGjv0zXNFjdWqDFsvoCiruB';
        const urlToCall = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`
        const resp = await fetch(urlToCall);
        const { data } = await resp.json();

        const gifs = data.map( image => {
            return {
                id: image.id,
                title: image.title,
                url: image.images?.downsized_medium.url
            }
        })

        console.log(``, data)

    }

    getGifs()

    const handleInputValueChange = (e) => {
        // setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        // if (inputValue.trim().length > 2) {
        //     setCategories(categories => [...categories, inputValue])
        //     setInputValue('')
        // }
    }

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
