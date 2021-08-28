const fibonacci = function(k) {
    let x = [0,1]
    let sum = 1
    if(k>=0){
        for (i=2; i<=k; i++){
            x[i] = x[i-1] + x[i-2]
            console.log(x[i])
        }return x[k]
    }else{
        return 'OOPS'
    }
};
console.log(fibonacci(5))
module.exports = fibonacci;
