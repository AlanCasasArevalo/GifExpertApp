import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CategoryAdd = () => {

    const [inputValue, setInputValue] = useState('holaaaaaa')

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`submit`)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputValueChange }
            />
        </form>
    )
}
//
// CategoryAdd.propTypes = {
//     value: PropTypes.number
// }

export default CategoryAdd;

