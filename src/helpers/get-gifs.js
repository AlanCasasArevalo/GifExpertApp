export const getGifs = async ( category ) => {
    const apiKey = 'irpbY8APMlGjv0zXNFjdWqDFsvoCiruB';
    const urlToCall = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`
    const resp = await fetch(urlToCall);
    const {data} = await resp.json();

    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url
        }
    })

    return gifs
}