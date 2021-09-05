var Utils = require('./utils')

const Calculator = {
    Add: function(numbers) {
        let negativeNums = []

        try {
            if (!numbers.length) return 0
    
            let { delimiters, expression } = Utils.parseDelimiterAndExpression(numbers)

            //build regex for string split
            let delimitRegex = new RegExp(`[${delimiters.join('')}]+`)
            
            //split string to array
            let splitNums = expression.split(delimitRegex)

            //add using map
            let sum = 0;
            splitNums.map(num => {
                if (num < 0) {
                    negativeNums.push(num)
                } else if (num > 1000) {
                    return sum
                } else {
                    return sum += parseInt(num)
                }
                
            })

            if (negativeNums.length > 0) throw new Error("Negatives not allowed")

            return sum;
        } catch (e) {
            return negativeNums;
        }
        
    }
}

//console.log(Calculator.Add("//$$$,@@@,&&&\n1$$$2@@@3&&&4"))

module.exports = Calculator