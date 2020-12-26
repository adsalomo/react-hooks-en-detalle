import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Prueba <RealExampleRef />', () => {

    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<RealExampleRef />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el componente <MultipleCustomHooks />', () => {
        const wrapper = shallow(<RealExampleRef />);

        const button = wrapper.find('button');

        //console.log(button.props());

        button.simulate('click');

        //console.log(wrapper.html());

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });


});
