import React from 'react';
import { mount } from 'enzyme';

import { HomeScreen } from '../../../components/09-useContext/HomeScreen';

import '@testing-library/jest-dom';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Elena',
        email: 'elena@gmail.com',
    }

    // shallow no sirve porque, se necesita renderizar todo
    // shallow solo rendirizará el User Context

    const wrapper = mount(
        <UserContext.Provider
            value={{ user }}
        >
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
