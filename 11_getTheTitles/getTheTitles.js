const getTheTitles = function() {
    let ans = []
    const books = [
        { 
            title:'Book', author:'Name'
        },
        {
            title:'Book2', author: 'Name2'
        }
    ]
    books.forEach((a,i) => {
        ans[i]= a.title
    });
    return ans
};
console.log(getTheTitles())
module.exports = getTheTitles;
