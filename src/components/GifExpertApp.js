import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    const handleAdd = () => {
        console.log(`ssss`)
        setCategories([...categories, 'Dragon Ball Z'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr/>

            <button onClick={ handleAdd }>Agregar un nueva serie</button>

            <ol>
                {
                    categories.map( (category, index) => {
                        return <li key={category}> { category } </li>
                    })
                }
            </ol>

        </>
    )
}
//
// GifExpertApp.propTypes = {
//     value: PropTypes.number
// }

export default GifExpertApp;

