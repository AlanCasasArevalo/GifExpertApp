import {shallow} from "enzyme";
import React from "react";
import GifGrid from "../../components/GifGrid";

describe('GifGrid Component test', () => {

    const category = 'Hola'
    let wrapper = shallow(
        <GifGrid
            category={category}
        />)


    beforeEach(() => {
        wrapper = shallow(
            <GifGrid
                category={category}
            />)
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

    test('GifGrid should return a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    describe('H3 CATEGORY TAG', () => {
        test('It should get animate__flash class', () => {
            const h3 = wrapper.find('h3')
            const {className, children} = h3.props()
            expect(className).toStrictEqual('animate__animated animate__flash')
        })

        test('It should get category value', () => {
            const h3 = wrapper.find('h3')
            const {className, children} = h3.props()
            expect(children).toStrictEqual(category)
        })
    })

    test('p loading text should be Cargando ....', () => {
        const p = wrapper.find('p')
        const {className, children} = p.props()
        expect(children).toStrictEqual('Cargando ....')
    })

    describe('DIV CATEGORY TAG', () => {
        test('div should get card-grid class', () => {
            const div = wrapper.find('div')
            const {className, children} = div.props()
            expect(className).toStrictEqual('card-grid')
        })
    })
})
