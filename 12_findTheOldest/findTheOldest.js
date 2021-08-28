const findTheOldest = function() {
    let age = []
    const people = [
        {
            name:'Carly',
            yearOfBirth: 1942,
            yearOfDeath: 1970,
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
    const findPerson = (array, name) =>{
        const returnName = array.find((person, i) => {
            return person.name === name
        })
        return returnName
    }
    return findPerson(people,'Ray')
}
console.log(findTheOldest())
module.exports = findTheOldest;
