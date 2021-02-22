// TDD
import sum from './sum.js'

// Takes in 2 numbers, returns sum

describe('Testing sum module', () => {
    // pass in 2 num, 1 and 1, expect 2 as sum
    test('sum of 1 and 1', () => {
        expect(sum(1, 1)).toBe(2);
    })
    // pass -1 and 1, expect 0
    test('sum of -1 and 1', () => {
        expect(sum(-1, 1)).toBe(0);
    })
    // pass .5 and 1, expect 1.5
    test('sum of .5 and 1', () => {
        expect(sum(.5,1)).toBe(1.5);
    })
    // pass 1, expect 1
    test('sum of 1', () => {
        expect(sum(1)).toBe(1);
    })
    // pass '1' and 2, expect 3
    test(`sum of '1' and 2`, () => {
        expect(sum('1',2)).toBe(3);
    })
    // pass 'ten' and 1, expect NaN
    test(`sum of 'ten' and 1`, () => {
        expect(sum('ten',1)).toBe(NaN);
    })
})
