
console.log(window);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
} ;

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149,149,151,151,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  console.log(evento);
  var colorcito = "blue";
  var movimiento = 10;
  /*if(evento.keyCode == teclas.UP)
  {
    console.log("arriba");
  }*/

  switch(evento.keyCode){

    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y -  movimiento, papel);
      y = y - movimiento;
      console.log("arriba");
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y +  movimiento, papel);
      y = y + movimiento;
      console.log("abajo");
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      console.log("izquierda");
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
     console.log("derecha");
    break;
  }
}
