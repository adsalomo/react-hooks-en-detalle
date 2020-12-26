import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

import '@testing-library/jest-dom';

describe('Pruebas useForm', () => {

    const initialForm = {
        name: 'Adrián',
        email: 'adrian@gmail.com'
    };

    test('Debe de regresar el formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el name del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        const newValue = {
            target: {
                name: 'name',
                value: 'Elena'
            }
        };

        act(() => {
            handleInputChange(newValue);
        });

        const [values] = result.current;

        /*expect(values).toEqual({
            name: 'Elena',
            email: 'adrian@gmail.com'
        });*/

        expect(values).toEqual({ ...initialForm, name: 'Elena' });
    });

    test('Debe re-establecer el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        const newValue = {
            target: {
                name: 'name',
                value: 'Elena'
            }
        };

        act(() => {
            handleInputChange(newValue);
            reset();
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);
    });


});
