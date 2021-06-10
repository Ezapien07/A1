/*
1.- Elementos
2.- Inicializar el juego
3.- Un jugador seleciona una casilla
4.- Verificar si hay un jugador ganador
5.- Cambiar jugadir en turno. Si no, regresaría 3

reiniciar
*/
//Carlos Ernesto Zapien Diaz
class Juego{
    jugadorEnTurno;
    celdas = [];

    constructor(){
        this.jugadorEnTurno = 'X';
        this.celdas = ['','','','','','','','',''];
    }

    seleccionaCasilla(posicion){
        //Si ya tiene un valor, entonces no se selecciona la casilla
        if(this.celdas[posicion]){
            return false;
        }else{
            //Si no tiene ningún valor, sí se selecciona.
            this.celdas[posicion] = this.jugadorEnTurno;
            return true;
        }
    }

    juegoGanado(){
        if(this.celdas[0] && this.celdas[0] == this.celdas[1] && this.celdas[1] == this.celdas[2]){
            return true;
        } else if(this.celdas[3] && this.celdas[3] == this.celdas[4] && this.celdas[4] == this.celdas[5]){
            return true;
        }
        else if(this.celdas[6] && this.celdas[6] == this.celdas[7] && this.celdas[7] == this.celdas[8]){
            return true;
        }else{
            false;
        }
    }

    cambiarTurno(){
        if(this.jugadorEnTurno == "X"){
            this.jugadorEnTurno = "O"
        }else{
            this.jugadorEnTurno = "X"
        }
    }
}

var juego = null;

function actualizaPantalla(){

    $('#salida').html('El turno del jugador ' + juego.jugadorEnTurno );
    
    $('#div0').html(juego.celdas[0]);
    $('#div1').html(juego.celdas[1]);
    $('#div2').html(juego.celdas[2]);
    $('#div3').html(juego.celdas[3]);
    $('#div4').html(juego.celdas[4]);
    $('#div5').html(juego.celdas[5]);
    $('#div6').html(juego.celdas[6]);
    $('#div7').html(juego.celdas[7]);
    $('#div8').html(juego.celdas[8]);
}

function iniciarJuego(){
    juego = new Juego();

    actualizaPantalla();
}

function selecciona(posicion){

    
    if(juego.seleccionaCasilla(posicion)){
        return;
    }

    if(juego.juegoGanado()){
        $("#salida").html('Ha ganado el jugador ' + juego.jugadorEnTurno );
        return;
    }

    actualizaPantalla();

    juego.cambiarTurno();
    
}