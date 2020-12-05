import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CategoryAdd = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValueChange}
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default CategoryAdd;

