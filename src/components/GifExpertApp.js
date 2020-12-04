import React, {useState} from 'react'
import CategoryAdd from "./CategoryAdd";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X'])

    const handleAdd = () => {
        console.log(`ssss`)
        setCategories([...categories, 'Dragon Ball Z'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <CategoryAdd
                setCategories={setCategories}
            />
            <hr/>

            <ol>
                {
                    categories.map(category =>
                        (<GifGrid
                                key={category}
                                category={category}
                            />
                        ))
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

