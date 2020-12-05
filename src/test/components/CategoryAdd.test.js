import {shallow} from "enzyme";
import React from "react";
import CategoryAdd from "../../components/CategoryAdd";

describe('CategoryAdd Component test', () => {

    const setCategories = () => {
    }
    let wrapper = shallow(
        <CategoryAdd
            setCategories={setCategories}
        />)

    beforeEach(() => {
        wrapper = shallow(
            <CategoryAdd
                setCategories={setCategories}
            />)
    })

    test('CategoryAdd should be defined', () => {
        expect(<CategoryAdd
            setCategories={setCategories}
        />).toBeDefined()
    })
    test('CategoryAdd should be an object', () => {
        expect(typeof <CategoryAdd
            setCategories={setCategories}
        />).toBe('object')
    })

    test('CategoryAdd should return a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

})
