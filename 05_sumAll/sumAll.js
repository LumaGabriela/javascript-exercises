const sumAll = function(a,b) {
    let numbers = []
    let sum = 0

    if(a>=0 && b>=0 && typeof a === 'number' && typeof b === 'number'){
        let k = 0
        if(a>b){
            k=a-b
            for(let i=k; i>=0; i--){
                numbers[i] = a - i
                console.log('numbers[i]: ' + numbers[i])
                //console.log(k)
                sum += numbers[i]
            }
        }else{
            k=b-a
            for(let i=0; i<=k; i++){
                numbers[i] = a + i
                console.log('numbers[i]: ' + numbers[i])
                //console.log(k)
                sum += numbers[i]
            }
        }
        
        return sum
    }else { 
        return 'ERROR'
    }
};
console.log(sumAll(13,'10'))
module.exports = sumAll;
