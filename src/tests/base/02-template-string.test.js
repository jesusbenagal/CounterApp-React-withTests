import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => { 

    test('getSaludo debe de retornar hola Jesus', () => {

        const nombre = 'Jesús'

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola '+ nombre );

    })

    // getSaludo debe de retornar Hola Carlos si no hay argumento

    test('getSaludo debe de retornar Hola Carlos si no hay argumento', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos' );
     })

 })