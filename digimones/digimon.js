class Digimon
{
  constructor(n,v,a)
  {
    this.nombre = n;
    this.vida   = v;
    this.ataque = a;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];

  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br>Nombre:"+this.nombre+"<br>");
    document.write("Vida:"+this.vida+"<br>");
    document.write("Ataque:"+this.ataque+"<br>");

  }
}
