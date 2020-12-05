import {shallow} from "enzyme";
import React from "react";
import GifExpertApp from "../../components/GifExpertApp";

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
        expect(<GifExpertApp />).toBeDefined()
    })
    test('GifExpertApp should be an object', () => {
        expect(typeof <GifExpertApp />).toBe('object')
    })

    test('GifExpertApp should return a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
