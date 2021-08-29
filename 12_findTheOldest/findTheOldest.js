const people = [
    {
        name:'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1990,
    },
    {
        name:'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        //yearOfDeath: 1941,
      },
]
// const findTheOldest = function(arr) {
//     let oldest = ''
//     let age = 0
//     const findPerson = (array, actual ) =>{
//         const returnName = array.find((person) => {
//             if(!person.yearOfDeath){
//                 person.yearOfDeath = new Date().getFullYear()
//                 person.age = person.yearOfDeath - person.yearOfBirth
//             }else{
//                 person.age = person.yearOfDeath - person.yearOfBirth
//             }

//             if (person.age > age){
//                 age = person.age
//                 oldest = person
//                 //console.log(age)
//             }
//             console.log(person.yearOfDeath)
//         })
//         return oldest
        
//     }
//     return findPerson(arr)
// }
// console.log(findTheOldest(people))

//The solution
  
const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      console.log(currentPerson)
    //   console.log(oldestAge)
    //   console.log(currentAge)
      return oldestAge < currentAge ? currentPerson : oldest
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  console.log(findTheOldest(people))
module.exports = findTheOldest;
