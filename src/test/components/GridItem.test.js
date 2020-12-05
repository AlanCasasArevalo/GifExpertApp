import {shallow} from "enzyme";
import React from "react";
import GridItem from "../../components/GridItem";

describe('GridItem Component test', () => {

    let wrapper = shallow(<GridItem />)

    beforeEach(() => {
        wrapper = shallow(<GridItem />)
    })

    test('GridItem should be defined', () => {
        expect(<GridItem />).toBeDefined()
    })
    test('GridItem should be an object', () => {
        expect(typeof <GridItem />).toBe('object')
    })

    test('GridItem should return a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
