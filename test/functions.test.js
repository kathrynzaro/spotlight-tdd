// IMPORT MODULES under test here:
import { divideThenMultiply, getSecondItem, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, myFunction, returnAsAnArray, returnAsAString } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = myFunction('bunny rabbit');

    const expected2 = 'Kat!!!';

    const actual2 = myFunction('Kat');

    expect.equal(actual2, expected2, 'Kat = Kat');


    expect.equal(actual, expected, 'bunny rabbit = bunny rabbit');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('multiply by 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);
});

test('multiply by 12 then halve', (expect) => {
    const expected = 6;

    const actual = multiplyBy12ThenHalve(1);

    expect.equal(actual, expected);
});

test('divide then multiply', (expect) => {
    const expected = 4;

    const actual = divideThenMultiply(4, 2, 2);

    expect.equal(actual, expected);
});

test('return as an array', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected);
});

test('return as a string', (expect) => {
    const expected = '1, 2, 3';

    const actual = returnAsAString(1, 2, 3);

    expect.equal(actual, expected);
});

test('make lucky greeting', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 3.';

    const actual = makeLuckyGreeting(1, 2);

    expect.equal(actual, expected);
});

test('get second item', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});