import React from 'react';

import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';
import '@testing-library/jest-dom';

describe('Prueba HookApp', () => {

    test('Debe retornar el snapshot del componente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });

});
