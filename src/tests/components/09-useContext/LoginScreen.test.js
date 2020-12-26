import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

import '@testing-library/jest-dom';

describe('Prueba componente <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider
            value={{ setUser }}
        >
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de ejecutarse setUser con el argumento esperado', () => {
        const button = wrapper.find('button');

        const user = { id: 123, name: 'Fernando' };

        button.simulate('click');

        expect(setUser).toHaveBeenCalledWith(user);
    });

});
