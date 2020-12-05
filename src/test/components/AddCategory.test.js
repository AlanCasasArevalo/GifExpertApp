import {shallow} from "enzyme";
import React from "react";
import AddCategory from "../../components/AddCategory";

describe('AddCategory Component test', () => {

    const setCategories = jest.fn()

    let wrapper = shallow(
        <AddCategory
            setCategories={setCategories}
        />)

    beforeEach(() => {
        jest.clearAllMocks()
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

    test('input should NOT post information on submit', () => {
        const form = wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        expect(setCategories).not.toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(0)
    })

    test('input should NOT post information on submit if input have less than 2 characters', () => {
        const input = wrapper.find('input')

        // Esto simularia el valor cambiado de la caja de texto
        const valueMock = 'Ho'
        input.simulate('change', {
            target: {
                value: valueMock
            }
        })

        const form = wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        expect(setCategories).not.toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(0)

    })

    test('input should post information on submit if input have more than 2 characters', () => {
        const input = wrapper.find('input')

        // Esto simularia el valor cambiado de la caja de texto
        const valueMock = 'Hol'
        input.simulate('change', {
            target: {
                value: valueMock
            }
        })

        const form = wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        expect(setCategories).toHaveBeenCalledTimes(1)

        const inputAfter = wrapper.find("input")
        const { value } = inputAfter.props()
        expect(value).toBe('')

    })
})






