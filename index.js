
function Add(numbers) {

    if (!numbers.length) return 0
    
    //split string to array
    let splitNums = numbers.split(',')
    
    //add using map
    let sum = 0;
    splitNums.map(num => {
        return sum += parseInt(num)
    })

    return sum
}

console.log(Add("1,\n2,4"))