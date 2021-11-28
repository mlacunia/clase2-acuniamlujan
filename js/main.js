//El usuario ingresa notas de 10 alumnos de la carrera desarrollo back end.
//inicializo promediomax y legajomax para despues comparar
let promediomax = 0;
let legajomax = 0;
//calculo el promedio por alumno con la funcion recibiendo como parametro las notas ingresadas
function prom(x, y) {
    return (x + y) / 2
}

for (let i = 0; i < 3; i++) {

    let legajo = parseInt(prompt('ingrese numero de legajo del alumno'));
    let primercuatri = parseFloat(prompt('ingrese nota del primer cuatrimestre'));
    let segundocuatri = parseFloat(prompt('ingrese nota del segundo cuatrimestre'));
    let resultado = prom(primercuatri, segundocuatri);
    //comparo si el promedio es mayor al maximo
    if (resultado > promediomax) {
        promediomax += resultado;
        legajomax += legajo;


    }

} alert('el mejor promedio fue el alumno con numero de legajo ' + legajomax + '\n' +
    'y con un promedio de ' + promediomax
);
