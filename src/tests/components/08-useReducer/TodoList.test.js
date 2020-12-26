import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener dos elementos <TodoListItem />', () => {
        // numero de items del componente igual al numero del arreglo
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

        // Debe tener la propiedad handleDelete como una función
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete'))
            .toEqual(expect.any(Function));
    });


});
