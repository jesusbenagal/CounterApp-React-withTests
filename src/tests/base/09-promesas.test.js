import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con Promesas', () => { 

    test('getHeroeByIdAsync debe retornar un heroe async', ( done ) => { 

        const id = 1;

        getHeroeByIdAsync( id )
            .then ( heroe => {

                expect ( heroe ).toBe( heroes[0] );
                done();

            });
        
     });

     test('debe de obtener un error si el heroe no existe', ( done ) => { 

        const id = 10;

        getHeroeByIdAsync( id )
            .catch ( err => {

                expect ( err ).toBe('No se pudo encontrar el héroe');
                done();

            });

      });

 })