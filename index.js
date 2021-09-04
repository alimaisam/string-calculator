var Utils = require('./utils')

const Calculator = {
    Add: function(numbers) {
        if (!numbers.length) return 0
    
        let { delimiter, expression } = Utils.parseDelimiterAndExpression(numbers)
        
        //split string to array
        let splitNums = expression.split(delimiter)
        
        //add using map
        let sum = 0;
        splitNums.map(num => {
            return sum += parseInt(num)
        })

        return sum
    }
}

console.log(Calculator.Add("//@\n2@3@8"))

module.exports = Calculator