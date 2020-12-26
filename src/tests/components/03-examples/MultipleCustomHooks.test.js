import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Prueba MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        counter: 10
    });

    test('Debe mostrarse correctament', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot(wrapper);
    });

    test('Debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Adrián',
                    quote: 'Hola mundo'
                }
            ],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        //console.log(wrapper.html());
        // buscamos por las clases
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Adrián');
    });


});
