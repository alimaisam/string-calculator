var expect  = require('chai').expect;
var Utils = require('../src/utils')

describe('Utility', () => {
    it ('should parse and return delimiter and expression', () => {
        let {delimiters, expression} = Utils.parseDelimiterAndExpression("//@\n2@3@8")
        expect(delimiters).to.eql(['@'])
        expect(expression).to.equal("2@3@8")
    })

    it ('should parse and return multiple delimiter', () => {
        let { delimiters } = Utils.parseDelimiterAndExpression("//@,$\n2@3$8")
        expect(delimiters).to.eql(['@', '$'])
    })
})