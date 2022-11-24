const a = myFunction({ continent: 'Asia', country: 'Japan'}, 'continent');
const b = myFunction({ country: 'Sweden', continent: 'Europe'}, 'country');
const c = myFunction({ name: 'khriztian', 'fav-number': 33, age: 18 }, 'fav-number');
console.log(a);
console.log(b);
console.log(c);

function myFunction(obj, key) {
    return(obj[key] ? obj[key]:`El objeto no contiene la llave ${key}`);
  }