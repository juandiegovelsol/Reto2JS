# Make It Real - Reto 1 JavaScript

This is a solution to the second JavaScript project of the Make It Real course.

## Table of contents

- [Acceso a las propiedades del objeto](#Acceso-a-las-propiedades-del-objeto)
- [Fix Error: Valor vs. Referencia de Tipos](#Fix-Error-Valor-vs.-Referencia-de-Tipos)


## Acceso a las propiedades del objeto
Escribir una función que tome un objeto con dos propiedades y un string como argumentos.
Debe devolver el valor de la propiedad con clave igual al valor del string.

```js
function myFunction(obj, key) {

  return
}

```

| Test Case                                                                   | Expected |
|-----------------------------------------------------------------------------|----------|
| myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')           | 'Asia'   |
| myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')          | 'Sweden' |
| myFunction({  name: 'khriztian', 'fav-number': 33, age: 18 }, 'fav-number') | 33       |

## Fix Error: Valor vs. Referencia de Tipos
Cree una función que devuelva `true` si dos arreglos contienen valores idénticos y `false` en caso contrario.

Para resolver esta pregunta, tu amigo escribe el siguiente código:

```js
function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
```

Pero probando el código, ves que algo no está del todo bien. Ejecutar el código arroja los siguientes resultados:

```js
checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
```

Reescribe el código de tu amigo para que verifique correctamente si dos arreglos son iguales. Para ser iguales, los arreglos deben tener los mismos elementos en el mismo orden.

Las siguientes pruebas deben pasar:

| Test Case                          | Expected |
|------------------------------------|----------|
| checkEquals([1, 2], [1, 3])        | `false`  |
| checkEquals([1, 2], [1, 2])        | `true`   |
| checkEquals([4, 5, 6], [4, 5, 6])  | `true`   |
| checkEquals([4, 7, 6], [4, 5, 6])  | `false`  |
| checkEquals([4, 7, 6], [4, 6, 7])  | `false`  |