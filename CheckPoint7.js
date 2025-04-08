function calcularYComparar(a, b, c, d) {
    
    let suma1 = a + b;
  
    let suma2 = c + d;
  
    let resultado = suma1 * suma2;

    if (resultado > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
  }
  calcularYComparar(3, 4, 5, 6);

  //Salida; "¡El número es mayor que 50!"