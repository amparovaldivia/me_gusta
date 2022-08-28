function contador(numero_uno) {
    numero_uno.innerHTML = parseInt(numero_uno.innerHTML) + 1;
    //cuando sume el número del botón con +1, se concateno y no sumo
    //se ve como número, pero segun w3school eso pasa cuando es un string aunque yo vea que es número
    //por eso se usa parseInt que convierte el string de html en un número entero
}