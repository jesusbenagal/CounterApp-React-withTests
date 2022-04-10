import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas para CounterApp', () => { 

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {

        wrapper = shallow(<CounterApp />);

    });
    
    test('Debe mostrar correctamente <CounterApp/>', () => { 
        
        

        expect( wrapper ).toMatchSnapshot();

     })

    test('Debe mostrar el valor por defecto de 100', () => { 

        const wrapper = shallow(
            <CounterApp 
                value={ 100 }
            />
        );

        const numeroH2 = wrapper.find('h2').text().trim();

        expect ( numeroH2 ).toBe( '100' );

    });

    test('debe de incrementar con el boton +1', () => {
          
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');

    });
      

    test('debe de decrementar con el boton -1', () => {
          
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');

    });

    test('debe de restablecer el valor', () => { 

        const wrapper = shallow(
            <CounterApp 
                value={ 105 }
            />
        );
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect ( counterText ).toBe('105');

    });
    

 })