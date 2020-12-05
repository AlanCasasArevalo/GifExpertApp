import {shallow} from "enzyme";
import React from "react";
import GifExpertApp from "../components/GifExpertApp";

describe('GifExpertApp Component test', () => {

    let wrapper = shallow(
        <GifExpertApp
        />)

    beforeEach(() => {
        wrapper = shallow(
            <GifExpertApp
            />)
    })

    test('GifExpertApp should be defined', () => {
        expect(<GifExpertApp/>).toBeDefined()
    })
    test('GifExpertApp should be an object', () => {
        expect(typeof <GifExpertApp/>).toBe('object')
    })

    test('GifExpertApp should return a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })


    test('GifExpertApp should return a category list', () => {
        const categories = ['Hello', 'Bye']
        wrapper = shallow(
            <GifExpertApp
                defaultCategories={categories}
            />)
        expect(wrapper).toMatchSnapshot()
        const length = wrapper.find('GifGrid').length
        expect(length).toBe(categories.length)
    })

    test('GifExpertApp should get h1', () => {
        const title = wrapper.find('h1').props().children

        expect('GifExpertApp').toStrictEqual(title)
    })

    test('GifExpertApp should get ol', () => {
        const ol = wrapper.find('ol').props().children

        expect(ol).toBeTruthy()
    })
})
