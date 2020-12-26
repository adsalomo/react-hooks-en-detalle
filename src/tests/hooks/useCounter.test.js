import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Prueba useCounter', () => {

    test('Debe retornar valores por defecto ', () => {
        const { result } = renderHook(() => useCounter());

        //console.log(result.current);

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('Counter debe tener el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
    });

    test('Debe de incrementar el counter ', () => {
        const { result } = renderHook(() => useCounter(10));
        const { increment } = result.current;

        act(() => {
            increment();
        });

        const { counter } = result.current;

        expect(counter).toBe(11);
    });

    test('Debe de disminuir el counter ', () => {
        const { result } = renderHook(() => useCounter(10));
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        const { counter } = result.current;

        expect(counter).toBe(9);
    });

    test('Debe de inicializar el counter ', () => {
        const { result } = renderHook(() => useCounter(10));
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        });

        const { counter } = result.current;

        expect(counter).toBe(10);
    });
});
