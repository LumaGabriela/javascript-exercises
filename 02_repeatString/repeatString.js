const repeatString = function(string, num) {
    if (num>=0){
        return string.repeat(num)
    }else {
        return 'ERROR'
    }
};

module.exports = repeatString;
