var expect  = require('chai').expect;
var Calculator = require('../index')

describe('Add String Numbers', () => {
    it ('should Add all the numbers in string', () => {
        expect(Calculator.Add("1,2,3")).to.equal(6)
    })

    it ('should add and return wrong result', () => {
        expect(Calculator.Add("1,2,3")).to.not.equal(5)
    })

    it ('should return 0 if empty string', () => {
        expect(Calculator.Add("")).to.equal(0)
    })

    it ('should return integer', () => {
        expect(Calculator.Add("1,2")).to.be.a('number')
    })
})

describe('Add String Numbers with new line', () => {
    it ('should evaluate numbers with new line before comma in string', () => {
        expect(Calculator.Add("1\n,2,4")).to.equal(7)
    })

    it ('should evaluate numbers with new line after comma in string', () => {
        expect(Calculator.Add("1,\n2,4")).to.equal(7)
    })
})

describe('Support custom delimiter', () => {
    it ('should parse and add numbers using the delimiter in the format', () => {
        expect(Calculator.Add("//@\n2@3@8")).to.equal(13)
    })
})

describe('Add with a negative number', () => {
    it ('should gives out list of negative numbers array', () => {
        expect(Calculator.Add("1,-4,-5")).to.eql(['-4', '-5'])
    })
})