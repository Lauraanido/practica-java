/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }
,
  {
    age: 23,
    examScores: [],
    gender: 'female',
    name: 'isabel'
  }
,
  {
    age: 24,
    examScores: [],
    gender: 'male',
    name: 'victor'
  }
]
  
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
  

import readline from 'readline';



// Configuramos la consola para pedir los datos

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 



function isInit(str){
  // returns a boolean
  return /^[0-9]+$/.test(str)
}


function getNumber (){
  const promise = new Promise((resolve, reject) => {
    console.log('1- Mostrar en formato de tabla todos los alumnos.\n2- Mostrar por consola la cantidad de alumnos que hay en clase.\n3- Mostrar por consola todos los nombres de los alumnos.\n4- Eliminar el último alumno de la clase.\n5- Eliminar un alumno aleatoriamente de la clase.\n6- Mostrar por consola todos los datos de los alumnos que son chicas.\n7- Mostrar por consola el número de chicos y chicas que hay en la clase.\n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.\n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.\n10- Añadir un alumno nuevo.\n11- Mostrar por consola el nombre de la persona más joven de la clase.\n12- Mostrar por consola la edad media de todos los alumnos de la clase.\n13- Mostrar por consola la edad media de las chicas de la clase.\n14- Añadir nueva nota a los alumnos por cada alumno de la clase\n15- Ordenar el array de alumnos alfabéticamente según su nombre.' )
    
    rl.question('Introduce un número del 1 al 15 de las anteriores opciones : ' , (num) => {
      rl.pause();
      
      if (isInit (num)) {
       num = Number.parseInt(num)
       resolve(num)
     }

     else {
      reject ('Tienes que introducir un número del 1 al 15: ')
     }

    })
  })
  return promise;
}

const numberFromConsole = await getNumber()

async function numberConsole() {
  let getNumber 
    do {
          getNumber()
          const numberFromConsole = await getNumber()
          

      } while (numberFromConsole <= 0 && numberFromConsole > 15)
  }

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}


// Requisitos indispensables
switch (numberFromConsole) {

// ### 1- Mostrar en formato de tabla todos los alumnos. 
  case 1:
    console.table(students)
    break;

// ### 2- Mostrar por consola la cantidad de alumnos que hay en clase.
  case 2:
    console.log (students.length)
    break;

// ### 3- Mostrar por consola todos los nombres de los alumnos.
  case 3:
    let student = students.map( function(students){
      return students.name;
    })
    console.log(student)

  break;

// ### 4- Eliminar el último alumno de la clase.
  case 4:
  
  students.pop();
  console.log(students)
    

  break;

// ### 5- Eliminar un alumno aleatoriamente de la clase.
  case 5:

    function popRandom (students) {
      let i = (Math.random() * students.length) | 0
      return students.splice(i, 1)[0]
    }
    
    
    console.log(popRandom(students))
    console.log(students)

  break;

// ### 6- Mostrar por consola todos los datos de los alumnos que son chicas.
  case 6:
    let mujeres = students.filter( students => students.gender === 'female')

    console.log(mujeres)

  break;

// ### 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
  case 7:
    
    let mujeres1 = students.filter( students => students.gender === 'female')
    let hombres = students.filter( students => students.gender === 'male')
    
    console.log('Número de mujeres: ' + mujeres1.length)
    console.log('Número de hombres: ' + hombres.length )
  break;

// ### 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
  case 8:
  
  const isfemale = students.every(function (gender) {
    return gender === 'female'
  })
  
  console.log(isfemale)

  break;

// ### 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
  case 9:
  
    let range = {
      bajo: 20,
      alto: 25
    };
  
    let between = students.filter(function(students) {
      return students.age >= this.bajo && students.age <= this.alto;
    }, range)

  function getname() {
    between.forEach(students => { console.log(students.name)}) 
  }
  getname()

  break;

// ### 10- Añadir un alumno nuevo con los siguientes datos:
//   - nombre aleatorio.
//   - edad aleatoria entre 20 y 50 años.
// - género aleatorio.
//   - listado de calificaciones vacío.

// ¡OJO!, el nombre y el género tienen que ir acordes.
  case 10:
  

      // Random género 
  const randomGender = Math.floor(Math.random() * availableGenders.length);
  var GenderValue = availableGenders[randomGender]

    // Random nombre chica 
  const random = Math.floor(Math.random() * availableFemaleNames.length);
  var femaleName = availableFemaleNames[random]

    // Random nombre chico 
    const randomM = Math.floor(Math.random() * availableMaleNames.length);
  var MaleName = availableMaleNames[randomM]
  
  function getNameforPush (randomGender) {
    if (randomGender === 'female') {
      return femaleName
      
    }
    else {
      return MaleName
      
    }
  }

  let newname = getNameforPush()

 

 let randomAge = calculateRandomNumber(20, 50)

 let my_student ={}

  my_student.age = randomAge
  my_student.examScores = []
  my_student.gender = GenderValue
  my_student.name = newname

  students.push(my_student)
  console.log(students)

  break;

// 11- Mostrar por consola el nombre de la persona más joven de la clase.
// ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.
  case 11:

    let lista = students.sort((a, b) => a.age - b.age); // creo una lista de las edades en orden ascendente
    
    let youngest = lista[0]
    
    console.log (youngest.name)

    break;

// ### 12- Mostrar por consola la edad media de todos los alumnos de la clase.
  case 12:
  
  var allages = students.map(age => (age.age));

  const average = allages.reduce((a, b) => a + b, 0) / allages.length;
  
  console.log('Aquí están todas las edades: ' +  allages)
  console.log('Y la media de las edades es ' + average)

      break;

// ### 13- Mostrar por consola la edad media de las chicas de la clase.
  case 13:

  let mujereslista = students.filter( students => students.gender === 'female')

  var allagesmujeres = mujereslista.map(age => (age.age));

  const averagemujeres = allagesmujeres.reduce((a, b) => a + b, 0) / allagesmujeres.length

  console.log('La media de edad de las mujeres es ' + averagemujeres)  

    break;

// ### 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
  case 14:

  
  let randomNota = calculateRandomNumber(0,10)
  
  // for each student push de randomNota 
  
  student.examScores = randomNota
  
  
  console.log('Incompleto ')

    break;

// ### 15- Ordenar el array de alumnos alfabéticamente según su nombre.  
case 15:

  let Alphabetically = students.sort((a, b) => {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    
    return 0;
  });

  console.log (Alphabetically)

  break;


  default:
    console.log ('Tienes que meter un número del 1 al 15')

    break;
}



// ## Requisitos opcionales
// Os recomiendo encarecidamente que los intentéis, no son difíciles!

// ### 16- Mostrar por consola el alumno de la clase con las mejores notas.
// El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.

// ### 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.

// ### 18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.