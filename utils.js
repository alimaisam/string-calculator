const Utils = {
    parseDelimiterAndExpression: function(expression) {
        if (expression.startsWith('//')) {
            let expSplit = expression.split('\n')
            let delimiter = expSplit[0].replace(/\/\//g, '')
            return { delimiter, expression: expSplit[1] }
        }
        return { delimiter: ',', expression }
    }
}

module.exports = Utils;