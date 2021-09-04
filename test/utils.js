var expect  = require('chai').expect;
var Utils = require('../utils')

describe('Utility', () => {
    it ('should correctly parse delimiter and expression', () => {
        let {delimiter, expression} = Utils.parseDelimiterAndExpression("//@\n2@3@8")
        expect(delimiter).to.equal("@")
        expect(expression).to.equal("2@3@8")
    })
})