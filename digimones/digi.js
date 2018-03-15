var imagenes = [];
imagenes["Pollo"] = "pollo.png";
imagenes["Vaca"]  = "vaca.png";
imagenes["Cerdo"] = "cerdo.png";

var coleccion = [];

coleccion.push(new Digimon("Pollo",50,60));
coleccion.push(new Digimon("Vaca",40,30));
coleccion.push(new Digimon("Cerdo",20,10));

console.log(coleccion);

for (var recorre of coleccion)
{
  recorre.mostrar();
}
