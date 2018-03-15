var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");


boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf, yf, xi;
    var colorcito = "Pink";
    var z = ancho / lineas;
    //while(l < lineas)
    //l = l + 1;
    for(l = 0; l < lineas; l++)
    {
        yi = z * l;
        xf = z * (l + 1);

        xi = z * l;
        yf = z * l;

        xI = z * l;
        yF = 300 - (z * l);

        Xf = 300 - (z * l);
        Yi = z * l;

        dibujarLinea(colorcito, 1,yi,xf,300);
        dibujarLinea(colorcito, xi,1,300,yf);
        dibujarLinea(colorcito, xI,1,1,yF);
        dibujarLinea(colorcito,300,Yi,Xf,300);
    }


}
