OBJETOS: Los objetos en Javascript son contenedores de datos, más precisamente colecciones de propiedades con sus valores. Generalmente contienen mucha información
sobre una cosa. 
En JS todo es objetivos. Incluso los arrays por ejemplos. Son objetos con propiedades
numericas cada una equivalente al indice de la posición en el array.
Se instancian entre {}

PROPIEDADES:
Las propiedades o Claves (keys) son unicas dentro de cada objeto (no puede haber 2 iguales) y pueden tener cualquier tipo de valores (arrays, string, num, funciones, objetos).
A esos valores se los puede invocar a traves del objeto y la propiedad que se necesite.

METODOS:
Los métodos no son más que funciones definidas dentro de un objeto.
La propiedad / key será el nombre de la función para poder invocarla junto al objeto al que pertenece agregando () como en las funciones normales.

FOR IN:
Es un bucle necesario para iterar y recorrer un objeto.
Es una variación de for para recorrer un objeto entre sus propiedades y valores.
La adaptación es necesaria porque los objetos no tienen indices numéricos para sus 
valores como pasa con los array. Si bien las propiedades podrían ser numéricas, 
en general toman un valor string que describa el valor que contienen.

NOTACION con PUNTO o Corchete

Un objeto puede invocarse

objeto.propiedad; Muy usual ya que es más simple.

o colocando objeto['propiedad'];

En general, si el nombre de la propiedad a invocar está en una variable, utilizaremos
la notación por corchetes
objeto[variableconnombrepropiedad];
