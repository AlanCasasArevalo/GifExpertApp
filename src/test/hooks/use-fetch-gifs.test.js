import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe('CUSTOM HOOKS TESTS', () => {

    test('useFetchGifs should be defined', () => {
        expect(useFetchGifs).toBeDefined()
    })

    test('useFetchGifs should be an object', () => {
        expect(typeof useFetchGifs).toBe('function')
    })

    test('useFetchGifs should return empty data and loading in true', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon'))
        const {data, loading} = result.current

        await waitForNextUpdate()

        expect(loading).toBeTruthy()
        expect(data.length).toBe(0)
    })

    test('useFetchGifs should return data and loading in false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon'))
        await waitForNextUpdate()
        const {data, loading} = result.current
        expect(loading).toBeFalsy()
        expect(data.length).toBe(10)
    })
})