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
        yearOfDeath: 1941,
      },
]
const findTheOldest = function(arr) {
    let oldest = ''
    let age = 0
    const findPerson = (array, actual ) =>{
        const returnName = array.find((person) => {
            if(!person.yearOfDeath){
                person.yearOfDeath = new Date().getFullYear()
                person.age = person.yearOfDeath - person.yearOfBirth
            }else{
                person.age = person.yearOfDeath - person.yearOfBirth
            }

            if (person.age > age){
                age = person.age
                oldest = person
                //console.log(age)
            }
            console.log(person.yearOfDeath)
        })
        return oldest
        
    }
    return findPerson(arr)
}
console.log(findTheOldest(people))
module.exports = findTheOldest;
