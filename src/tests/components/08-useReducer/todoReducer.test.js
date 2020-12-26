import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Prueba todoReducer', () => {

    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('Debe agrear nuevo todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node Js',
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Debe borrar un todo', () => {
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
    });

    test('Debe cambiar el estado done a true de un TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);

        const todo = state.find(x => x.id === 1);

        expect(todo.done).toBe(true);
    });

});
