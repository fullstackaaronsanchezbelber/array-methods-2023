const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg



// Utiliza el método forEach para mostrar cada elemento del array por la consola
console.log('------------------------------')
students.forEach(i=> {
    console.log(i)
})
// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
console.log('------------------------------')
console.log(students.findIndex(i => i == 'María'));

// Utiliza el método some para saber si en este array existe la alumna "Katerina"
console.log('------------------------------')
console.log(students.some(i => i == 'Katerina'));

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
console.log('------------------------------')
console.log(students.find(i => i.length <= 5));

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
console.log('------------------------------')
console.log(students.every(i => i.length >= 4));

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
console.log('------------------------------')
console.log(students.filter(i => i.includes('i')));

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
console.log('------------------------------')
console.log(students.map(i => i.charAt(0)));