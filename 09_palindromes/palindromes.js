let regex = /[a-z]/i
const palindromes = function (w) {
    let result =''
    let first = '' 
    let word = w.toLowerCase()
    for(i=0; i<word.length; i++){
        if(regex.test(word[i])){
            result += word[i]
            first += word[i]
    } 
}   let newRes = []
    newRes = result.split("")
    newRes.reverse()
    newRes = newRes.join("")
    if(newRes === first){
        return true
    }else{
        return false
    }
};
console.log(palindromes('Racecar!'))
module.exports = palindromes;
