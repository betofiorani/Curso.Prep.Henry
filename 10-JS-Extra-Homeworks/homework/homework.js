// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var nuevo_array = [];
  var array_resultado = [];
  for (const property in objeto) {
    nuevo_array.push(property);
    nuevo_array.push(objeto[property]);
    array_resultado.push(nuevo_array);
    nuevo_array = [];
  }
  return array_resultado;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    // a minusculas por las dudas podría haber sido todo a mayusculas también.
    string = string.toLowerCase();
    //saco espacios en blanco
    string = string.replace(/\s/g, "");
    
    //inicializo un objeto donde guardar los resultados.
    var resultado = {}; 
    //recorremos el indice de cada caracter
    for(var letra in string){ 
      
      //revisamos si la letra ya está en el objeto. Si está le sumamos 1.
      if(string[letra] in resultado) { 
        resultado[string[letra]] = resultado[string[letra]] + 1;
      } 
      // Si no está, le damos valor de 1
      else { 
        resultado[string[letra]] = 1
      }
    }
    return resultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
    var array_mayusculas =s.match(/[A-Z]/g);
    var array_minusculas =s.match(/[a-z]/g);
    
    return array_mayusculas.join('') + array_minusculas.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array_palabras = str.split(' ');
  
  var frase_invertida = '';
  
  array_palabras.forEach(function(palabra){
      
    var palabra_invertida = '';
    for(var i=palabra.length -1 ; i>= 0 ; i--){
      
      palabra_invertida = palabra_invertida + palabra[i];
    }
    frase_invertida = frase_invertida + ' ' + palabra_invertida;

  })    
  
  return frase_invertida.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var string = numero.toString();

  var numero_revertido='';

  for(var i = string.length -1 ; i>=0 ;i--){

    numero_revertido = numero_revertido + string[i];
  }

  if(string === numero_revertido){

    return 'Es capicua';
  }
  else {
    return 'No es capicua';
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  //version 1
  var nueva_cadena = '';
  for(var i=0 ; i<cadena.length; i++){

    if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){

      nueva_cadena = nueva_cadena;
    }
    else {
      nueva_cadena = nueva_cadena + cadena[i];
    }
  }

  return nueva_cadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort(function(el1,el2){
    if(el1.length < el2.length){
      return -1;
    }
    if(el1.length >el2.length){
      return 1;
    }
    if(el1.length === el2.length){
      return 0;
    }
  })

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  if(arreglo1.length >= arreglo2.length){

    return arreglo1.filter(function(elemento){

      if(arreglo2.includes(elemento)){
        return true;
      }
      else{
        return false;
      }
    })
  }
  else {
    return arreglo2.filter(function(elemento){

      if(arreglo1.includes(elemento)){
        return true;
      }
      else{
        return false;
      }
    })
  }
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

