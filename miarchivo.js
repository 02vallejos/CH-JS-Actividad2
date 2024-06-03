//Actividad 2
//Alumno: Vallejos Cesar 
//Curso: JavaScript
//Comisión: 57710

alert('Bienvenido al juego Piedra 🪨, Papel 🧻 o Tijera ✂️');
const option = ["PIEDRA", "PAPEL", "TIJERA" ]
let scoreUser = 0;
let socoreMachine = 0;
let scoreTie = 0;
let again = true;

while (again) {
    let prp;
    let eleccionJugador = jugadorElige(option);
    let eleccionMaquina = maquinaElige(option);
    let resultGame = jugar(eleccionJugador, eleccionMaquina);
    if (resultGame == 1) {
        alert(`Felicidades me ganaste! 🎉\n Jugador ${eleccionJugador} y Maquina ${eleccionMaquina}`);
        scoreUser++;
    } else if(resultGame == -1) {
        alert('Perdiste te gane 🤪');
        scoreMachine++
    } else if(resultGame == 0){
        alert('Empatamos! 🥶');
        scoreTie++;
    }

    while (true) {
        prp = prompt('Jugamos de nuevo? Si o No');
        if (prp.toLocaleUpperCase() == 'NO') {
            if(scoreUser > socoreMachine){
                alert('Resultados!! \n El usuarion gana ' + scoreUser + ' a ' + socoreMachine);
            }else if(scoreUser < socoreMachine){
                alert('Resultados!! \n La máquina gana ' + socoreMachine + ' a ' + scoreUser);
            }else if(scoreUser == socoreMachine){
                alert('Resultados!! \n Juego empatado ' + socoreMachine + ' a ' + scoreUser);
            }
            again = false;
            break;
        } else if (prp.toLocaleUpperCase() == 'SI') {
            break;
        } else {
            alert('Opcion incorrecta 🙃');
        }
    }

}

function jugadorElige(option) {
    let op;
    while (true) {
        op = prompt('Elige Piedra✅, Papel✅ o Tijera✅');
        if (option.includes(op.toLocaleUpperCase())) {
            break;
        } else {
            alert('Esa no es una opción 🚫.')
        }
    }
    return op.toLocaleUpperCase();
}

function maquinaElige(option) {
    let op = Math.floor(Math.random() * 2);
    return option[op];
}

function jugar(opPlayer, oPMachine) {
    let result;
    if(opPlayer == oPMachine){
        result = 0;
    }
    else if(opPlayer == 'PIEDRA' && oPMachine == 'TIJERA' ||
        opPlayer == 'PAPEL' && oPMachine == 'PIEDRA' ||
        opPlayer == 'TIJERA' && oPMachine == 'PAPEL') {
        result = 1;
    }else{
        result -1;
    }
    return result;
}