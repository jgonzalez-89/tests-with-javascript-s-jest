// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("3.5 euro should be 4.20 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    let dollar = fromEuroToDollar(3.5);
    
    // hago mi comparacion (la prueba)
    expect(dollar).toBe(4.20);
})

test("4.20 dollar should be 447.65 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    let yens  = fromDollarToYen(fromEuroToDollar(3.5));

    // hago mi comparacion (la prueba)
    expect(yens).toBe(447.65); 
})

test("447.65 yens should be 2.8 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    let pounds  = fromYenToPound(fromDollarToYen(fromEuroToDollar(3.5)));
    
    // hago mi comparacion (la prueba)
    expect(pounds).toBe(2.8); 
})
