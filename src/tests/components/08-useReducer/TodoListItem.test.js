import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas componente TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
    />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la función handleDelete', () => {
        //console.log(wrapper.find('button').props());

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de llamar la función handleToggle', () => {
        //console.log(wrapper.find('button').props());

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });


    test('Debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    });

    test('debe de tener la clase complete si el TODO = true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });

});
