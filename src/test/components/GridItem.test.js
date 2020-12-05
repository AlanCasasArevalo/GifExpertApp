import {shallow} from "enzyme";
import React from "react";
import GridItem from "../../components/GridItem";

describe('GridItem Component test', () => {

    const title = 'Hola, soy Alan'
    const url = 'http://localhost:3000/image'
    let wrapper = shallow(
        <GridItem
            title={title}
            url={url}
        />)


    beforeEach(() => {
        wrapper = shallow(
            <GridItem
                title={title}
                url={url}
            />)
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
    test('GridItem should return title by props', () => {
        const titleInP = wrapper.find('p').text(title)
        expect(title).toBe(titleInP)
    })


    test('GridItem should return url and title into image by props', () => {
        const image = wrapper.find('img')
        const { src, alt } = image.props()
        expect(url).toStrictEqual(src)
        expect(title).toStrictEqual(alt)
    })

    test('GridItem should get animate__flash class into div', () => {
        const div = wrapper.find('div')
        const {className, children} = div.props()
        expect(className).toStrictEqual('card animate__animated animate__flash')
    })

    test('div should get image and p', () => {
        const div = wrapper.find('div')
        const {className, children} = div.props()
        expect(children[0].type).toStrictEqual('img')
        expect(children[1].type).toStrictEqual('p')
    })
})
