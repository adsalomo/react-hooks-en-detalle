import React from 'react';

import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Prueba TodoApp', () => {

    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => { });

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un TODO', () => {
        // Muestra información del componente montado completamente
        const wrapper = mount(<TodoApp />);

        // se llama dentro del act
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 2');

        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un TODO', () => {
        // Para esta prueba no es necesario llamar las funciones dentro de ACT
        // Porque estamos dentro de un componente con shalow

        // Agregamos un elemento
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);

        // Eliminamos un elemento
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 0');
    });

});
