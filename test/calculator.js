let assert = require('assert')


//addition
describe('add', function(){
    it('add(5,2) expected result 7 PASS', function(){
        assert.equal(5 + 2, 7)
    })
})

describe('add', function(){
    it('add(5,2) expected result 8 FAIL', function(){
        assert.equal(5 + 2, 8)
    })
})

//subtraction
describe('sub', function(){
    it('sub(5,2) expected result 3 PASS', function(){
        assert.equal(5 - 2, 3)
    }) 
})

describe('sub', function(){
    it('sub(5,2) expected result 5 FAIL', function(){
        assert.equal(5 - 2, 5)
    }) 
})

//multiplying
describe('mul', function(){
    it('mul(5,2) expected result 10 PASS', function(){
        assert.equal(5 * 2, 10)
    }) 
})

describe('mul', function(){
    it('mul(5,2) expected result 12 FAIL', function(){
        assert.equal(5 * 2, 12)
    }) 
})

//dividing
describe('div', function(){
    it('div(10,2) expected result 5 PASS', function(){
        assert.equal(10 / 2, 5)
    }) 
})

describe('div', function(){
    it('div(10,2) expected result 2 FAIL', function(){
        assert.equal(10 / 2, 2)
    }) 
})