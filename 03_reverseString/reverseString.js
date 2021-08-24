const reverseString = function(str) {
    let newStr = ''
    newStr = str.split("") 
    newStr = newStr.reverse()
	newStr = newStr.join("")
    return newStr
};

module.exports = reverseString;
