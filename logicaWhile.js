var numerosNaturalesASumar=0, control=1, sumaNumerosNaturales=0;

numerosNaturalesASumar= prompt("Ingrese el valor de los primeros números naturales que desea sumar");
while (numerosNaturalesASumar>=control) {
    sumaNumerosNaturales=sumaNumerosNaturales+control;
    control=control+1;

}
alert("La suma de los "+numerosNaturalesASumar + " primeros números naturales es igual a "+ sumaNumerosNaturales);