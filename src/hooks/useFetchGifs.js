import {useState, useEffect} from "react";
import {getGifs} from "../helpers/get-gifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // Esto sirve para poder llamar a la funcion de obtener los gifs pero solo la primera vez que se ejecuta el componente
    useEffect(() => {
        getGifs( category )
            .then(images => setState({
                data: images,
                loading: false
            }))
    }, [category])

    // // Mas o menos es lo mismo que lo que hemos echo con las imagenes
    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6,7,8,9,90],
    //         loading: false
    //     })
    // }, 2500)

    return state
}