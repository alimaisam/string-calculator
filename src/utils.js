const Utils = {
    parseDelimiterAndExpression: function(expression) {
        if (expression.startsWith('//')) {
            let expSplit = expression.split('\n')
            let delimitersCombined = expSplit[0].replace(/\/\//g, '')
            let delimiterArr = delimitersCombined.split(',')
            return { delimiters: delimiterArr, expression: expSplit[1] }
        }
        return { delimiters: [','], expression }
    }
}

module.exports = Utils;