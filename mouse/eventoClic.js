/*
1.- encontrar el evento del mouse
2.- funciones para dibujar
*/
var escenario = document.getElementById("areaDibujito");

var papel = escenario.getContext("2d");

var estado = 0;  //estado del clic

var color = "blue";  //color de linea

var x, y;  //guardar cordenada en x , y
|

document.addEventListener("mousemove", dibujarMouse);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  papel.beginPath();                    // inicia el trazo
  papel.strokeStyle = color;            // estilo del trazo (color)
  papel.linewidth = 3;                  // ancho de linea
  papel.moveTo(xinicial, yinicial);     // donde comienza la linea
  papel.lineTo(xfinal, yfinal);         // traza la linea (ubica el punto)
  papel.stroke();                       // dibuja el estio de trazo
  papel.closePath();                    // cierre el dibujo
}

function dibujarMouse(evento)
{

  if (estado == 1);
  {
    dibujarLinea(color, x,y,evento.layerX,evento.layerY);
  }

  x = evento.layerX;

  y = evento.layerY;

}
