// IMPORT MODULES under test here:
import { multiplyBySeven, myFunction } from '../functions.js';

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
