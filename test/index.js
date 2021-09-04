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
})

describe('Add String Numbers with new line', () => {
    it ('should evaluate numbers with new line before comma in string', () => {
        expect(Calculator.Add("1\n,2,4")).to.equal(7)
    })

    it ('should evaluate numbers with new line after comma in string', () => {
        expect(Calculator.Add("1,\n2,4")).to.equal(7)
    })
})