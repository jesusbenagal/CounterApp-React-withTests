import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Heroes', () => {

    test('debe de retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );
        
        expect ( heroe ).toEqual( heroeData );

    });

    test('debe de retornar un undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );
        
        expect ( heroe ).toBe( undefined );

    });

    //debe de retornar un arreglo con los heroes de document
    // owner
    //toEqual al arreglo filtrado

    //debe de retornar un arreglo con los Heroes de marvel
    // length = 2 // toBe

    test('Debe retornar array con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroeData = heroes.filter( h => h.owner === owner );

        expect ( heroes ).toEqual(heroeData);
    });

    test('debe de retornar un arreglo con los Heroes de marvel', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect ( heroes.length ).toBe( 2 );
        
     });
    
    

})