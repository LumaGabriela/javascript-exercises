const leapYears = function(year) {
    if(typeof year ==='number' && year%4 === 0 ){
        if(year%100===0 && year%400!==0){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}
console.log(leapYears(700))
module.exports = leapYears;
