const Utils = {
    parseDelimiterAndExpression: function(expression) {
        let expSplit = expression.split('\n')
        if (expSplit[0].startsWith('//')) {
            let delimiter = expSplit[0].replace(/\/\//g, '')
            return { delimiter, expression: expSplit[1] }
        }
        return { delimiter: ',', expression }
    }
}

module.exports = Utils;