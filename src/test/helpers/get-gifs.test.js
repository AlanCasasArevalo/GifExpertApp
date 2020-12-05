import {getGifs} from "../../helpers/get-gifs";

describe('get-gifs HELPER TEST', () => {
    test('getGifs should be defined', async () => {
        expect(typeof getGifs).toBe('function')
    })
    test('getGifs should return an object', async () => {
        const gifs = await getGifs('dragon')
        expect(typeof gifs).toBe('object')
    })
    test('getGifs should return an array of elements', async () => {
        const gifs = await getGifs('dragon')
        expect(Array.isArray(gifs)).toBeTruthy()
    })
    test('getGifs should returns 10 elements', async () => {
        const gifs = await getGifs('dragon')
        expect(Array.isArray(gifs)).toBeTruthy()
        expect(gifs.length).toBe(10)
    })
    test('getGifs should returns 0 gifs if category is sent empty ""', async () => {
        const gifs = await getGifs('')
        expect(Array.isArray(gifs)).toBeTruthy()
        expect(gifs.length).toBe(0)
    })
    test('getGifs should returns 10 random elements if category is not provider', async () => {
        const gifs = await getGifs()
        expect(Array.isArray(gifs)).toBeTruthy()
        expect(gifs.length).toBe(10)
    })
})