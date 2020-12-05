import {shallow} from "enzyme";
import React from "react";
import GifGrid from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs")

const gifsMocked = [
    {
        "id": "Zb0asRm15HqCbgShD4",
        "title": "elder scrolls dragon GIF by Bethesda",
        "url": "https://media1.giphy.com/media/Zb0asRm15HqCbgShD4/giphy.gif?cid=424d35b9tshdcac1j64zn4mu9d8rt79xt1m6ptas93ob0xg0&rid=giphy.gif"
    },
    {
        "id": "Zb0asRm15HqCbgShD4",
        "title": "elder scrolls dragon GIF by Bethesda",
        "url": "https://media1.giphy.com/media/Zb0asRm15HqCbgShD4/giphy.gif?cid=424d35b9tshdcac1j64zn4mu9d8rt79xt1m6ptas93ob0xg0&rid=giphy.gif"
    }
]

describe('GifGrid Component test', () => {

    const category = 'Hola'

    beforeEach(() => {
        useFetchGifs.mockReturnValue({
            data: gifsMocked,
            loading: false
        })
    })

    test('GifGrid should show correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(
            <GifGrid
                category={category}
            />)

        expect(wrapper).toMatchSnapshot()
    })

    test('should show items when images were returned by useFetchGifs', () => {

        useFetchGifs.mockReturnValue({
            data: gifsMocked,
            loading: false
        })

        const wrapper = shallow(
            <GifGrid
                category={category}
            />)

        const p = wrapper.find('p').exists()

        expect(p).toBeFalsy()
    })


    test('GifGrid should be defined', () => {
        expect(<GifGrid
            category={category}
        />).toBeDefined()
    })

    test('GifGrid should be an object', () => {
        expect(typeof <GifGrid
            category={category}
        />).toBe('object')
    })

    describe('H3 CATEGORY TAG', () => {

        test('It should get animate__flash class', () => {
            const wrapper = shallow(
                <GifGrid
                    category={category}
                />)

            const h3 = wrapper.find('h3')
            const {className, children} = h3.props()
            expect(className).toStrictEqual('animate__animated animate__flash')
        })

        test('It should get category value', () => {
            const wrapper = shallow(
                <GifGrid
                    category={category}
                />)
            const h3 = wrapper.find('h3')
            const {className, children} = h3.props()
            expect(children).toStrictEqual(category)
        })
    })

    test('p loading text should be Cargando ....', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(
            <GifGrid
                category={category}
            />)

        const p = wrapper.find('p')
        const {className, children} = p.props()
        expect(children).toEqual('Cargando ....')
    })

    describe('DIV CATEGORY TAG', () => {
        test('div should get card-grid class', () => {
            const wrapper = shallow(
                <GifGrid
                    category={category}
                />)
            const div = wrapper.find('div')
            const {className, children} = div.props()
            expect(className).toStrictEqual('card-grid')
        })
        test('div should get more than 1 children', () => {
            const wrapper = shallow(
                <GifGrid
                    category={category}
                />)
            const div = wrapper.find('div')
            const {className, children} = div.props()
            expect(Array.isArray(children)).toBeTruthy()

            expect(children.length).toBeGreaterThan(0)
        })

        test('div should get GridItem', () => {
            const wrapper = shallow(
                <GifGrid
                    category={category}
                />)
            const gridItem = wrapper.find('GridItem').length
            // expect(Array.isArray(children)).toBeTruthy()
            //
            expect(gridItem).toBe(gifsMocked.length)
        })
    })
})
