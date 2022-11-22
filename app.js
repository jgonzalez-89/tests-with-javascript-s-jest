// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// one euro is:
const oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = (valueInEuro * oneEuroIs.USD)*100/100;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yens
    let valueInYen = ((oneEuroIs.JPY / oneEuroIs.USD) * valueInDollar)*100/100;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a Pounds
    let valueInPound = ((oneEuroIs.GBP / oneEuroIs.JPY) * valueInYen)*100/100;
    // retornamos el valor
    return valueInPound;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

