import {shallow} from "enzyme";
import React from "react";
import AddCategory from "../../components/AddCategory";

describe('AddCategory Component test', () => {

    const setCategories = () => {
    }
    let wrapper = shallow(
        <AddCategory
            setCategories={setCategories}
        />)

    beforeEach(() => {
        wrapper = shallow(
            <AddCategory
                setCategories={setCategories}
            />)
    })

    test('AddCategory should be defined', () => {
        expect(<AddCategory
            setCategories={setCategories}
        />).toBeDefined()
    })
    test('AddCategory should be an object', () => {
        expect(typeof <AddCategory
            setCategories={setCategories}
        />).toBe('object')
    })

    test('AddCategory should return a snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('form should get input', () => {
        const form = wrapper.find('form')
        const {children} = form.props()
        expect(children.type).toStrictEqual('input')
    })

    test('input should change status if we change some character into it', () => {
        const input = wrapper.find('input')

        // Esto simularia el valor cambiado de la caja de texto
        const valueMock = 'Hola Mundo'
        input.simulate('change', {
            target: {
                value: valueMock
            }
        })

        const inputAfter = wrapper.find("input")
        const { value } = inputAfter.props()
        expect(value).toBe(valueMock)
    })

})






