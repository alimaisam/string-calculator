var Utils = require('./utils')

const Calculator = {
    Add: function(numbers) {
        let negativeNums = []

        try {
            if (!numbers.length) return 0
    
            let { delimiter, expression } = Utils.parseDelimiterAndExpression(numbers)

            //split string to array
            let splitNums = expression.split(delimiter)
            
            //add using map
            let sum = 0;
            splitNums.map(num => {
                if (num < 0) {
                    negativeNums.push(num)
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

module.exports = Calculator