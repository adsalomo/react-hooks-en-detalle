import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas TodoAdd', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {
        // Obtiene la función
        const formSubmit = wrapper.find('form').prop('onSubmit');
        //console.log(formSubmit);
        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('Debe de llamar la función handleAddTodo', () => {
        const input = wrapper.find('input');

        const value = 'Aprendiendo Java';

        input.simulate('change', {
            target: {
                name: 'description',
                value,
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault() { } });

        // Que haya sido llamada
        expect(handleAddTodo).toHaveBeenCalled();

        // Que se haya llamado con los argumentos
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });

        // Input es vacio despues de la llamada
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});
