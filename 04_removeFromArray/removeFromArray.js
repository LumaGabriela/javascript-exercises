function removeFromArray(...args) {
    //args.forEach((arg, index) => {
    //  console.log(`Argument ${index}:`, arg);
    //});
    arr = args[0]
    let num = []
    let pos = []
    for(let k=1; k<args.length; k++){
        num[k-1] = args[k]
    }

    for(let i=0; i<arr.length ; i++ ){
        for(let j=0; j<num.length; j++){
            if (arr[i] === num[j]){
                console.log(arr[i] + ' array posicao '+ i)
                console.log(num[j] + ' numero posicao ' + j)
                arr.splice(i,1)
                i--
            }
        }
    }
    return arr
  }
console.log(removeFromArray([1,2,3,'pato'],'1','pato'))
module.exports = removeFromArray;
