const {
  removeMiddle,
  get2ndAnd3rd,
  stringify,
  types,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  sortingStrings,
  sortingNumbers,
  sortingNumbersDescending,
  sortingCars,
  deleteColour,
  paintShop,
  secondLargest,
  addSales,
  totalSales,
  highestSum,
  walletSum,
  walletMerge,
  arrayOfWallets,
  crazyMoney,
  map,
  filter,
  find,
  reduce
} = require('../src');

test('Remove middle', () => {
  const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];

  const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
  const expectedOutput = ['queen'];

  const output = removeMiddle(words);

  expect(output).toEqual(expectedOutput);
  expect(words).toEqual(expectedWords);
});

test('Get second and third', () => {
  const numbers = [90, 5, 11, 5, 6];

  const expectedOutput = [5, 11];
  const expectedNumbers = [90, 5, 11, 5, 6];

  const output = get2ndAnd3rd(numbers);

  expect(output).toEqual(expectedOutput);
  expect(numbers).toEqual(expectedNumbers);
});

test('Convert numbers to strings', () => {
  const myArray = [31, 57, 12, 5];

  const unchanged = [31, 57, 12, 5];
  const expected = ['31', '57', '12', '5'];
  const output = stringify(myArray);

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});

test('Return types of items in array', () => {
  const input = [4.6, false, NaN, ['a', 'b'], null, undefined];

  const output = types(input);
  expect(output).toEqual([
    'number',
    'boolean',
    'number',
    'object',
    'null',
    'undefined'
  ]);
});

test('Get word lengths', () => {
  const words = ['sun', 'potato', 'roundabout', 'pizza'];
  const expected = [3, 6, 10, 5];

  const output = wordLengths(words);
  expect(output).toEqual(expected);
});

test('Cities', () => {
  const capitals = [
    { city: 'Paris', country: 'France' },
    { city: 'Madrid', country: 'Spain' },
    { city: 'Rome', country: 'Italy' }
  ];

  function transform({ city, country }) {
    return `${city} is the capital of ${country}`;
  }

  const expected = [
    'Paris is the capital of France',
    'Madrid is the capital of Spain',
    'Rome is the capital of Italy'
  ];

  const result = cities(capitals, transform);

  expect(result).toEqual(expected);
});

test('Get numbers greater than 10', () => {
  const numbers = [4, 10, 32, 9, 21];
  const expected = [32, 21];

  const output = largerThanTen(numbers);
  expect(output).toEqual(expected);
});

test('Get even numbers', () => {
  const numbers = [22, 13, 73, 82, 4];
  const expected = [22, 82, 4];

  const output = even(numbers);
  expect(output).toEqual(expected);
});

test('Find the needle', () => {
  const words = ['house', 'train', 'slide', 'needle', 'book'];
  const expected = 3;

  const output = findTheNeedle(words);
  expect(output).toEqual(expected);
});

test('Find largest number', () => {
  const numbers = [3, 21, 88, 4, 36];
  const expected = 88;

  const output = findLargest(numbers);
  expect(output).toEqual(expected);
});

test('Add all numbers', () => {
  const numbers = [9, 23, 10, 3, 8];
  const expected = 53;

  const output = addAllnumbers(numbers);

  expect(output).toEqual(53);
});

test('Sorting strings', () => {
  const companies = [
    'netflix',
    'google',
    'amazon',
    'facebook',
    'microsoft',
    'apple'
  ];
  const expected = [
    'amazon',
    'apple',
    'facebook',
    'google',
    'microsoft',
    'netflix'
  ];

  const output = sortingStrings(companies);

  expect(output).toEqual(expected);
});

test('Sorting numbers', () => {
  const numbers = [99, -2, 0, 101, 2, 3, 22, 37, 1, -11];
  const expected = [-11, -2, 0, 1, 2, 3, 22, 37, 99, 101];

  const output = sortingNumbers(numbers);

  expect(output).toEqual(expected);
});

test('Sorting numbers descending', () => {
  const numbers = [99, -2, 0, 101, 2, 3, 22, 37, 1, -11];
  const expected = [101, 99, 37, 22, 3, 2, 1, 0, -2, -11];

  const output = sortingNumbersDescending(numbers);

  expect(output).toEqual(expected);
});

test('Sorting cars', () => {
  const cars = [
    {
      make: 'tesla',
      model: 'roadster',
      year: 2020
    },
    {
      make: 'ford',
      model: 'fiesta',
      year: 1994
    },
    {
      make: 'reliant',
      model: 'robin',
      year: 1973
    },
    {
      make: 'toyota',
      model: 'prius',
      year: 2011
    }
  ];

  const expected = [
    {
      make: 'reliant',
      model: 'robin',
      year: 1973
    },
    {
      make: 'ford',
      model: 'fiesta',
      year: 1994
    },
    {
      make: 'toyota',
      model: 'prius',
      year: 2011
    },
    {
      make: 'tesla',
      model: 'roadster',
      year: 2020
    }
  ];

  const output = sortingCars(cars);

  expect(output).toEqual(expected);
});

test('Delete colour', () => {
  const car = {
    make: 'Ford',
    model: 'Mondeo',
    colour: 'gold'
  };
  const expected = {
    make: 'Ford',
    model: 'Mondeo'
  };

  const output = deleteColour(car);

  expect(output).toEqual(expected);
});

test('Paint shop', () => {
  const cars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
  ];

  const unpaintedCars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
  ];

  const repaintedCars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Pink' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
  ];

  const output = paintShop(cars, 'Pink');

  expect(output).toEqual(repaintedCars);
  expect(cars).toEqual(unpaintedCars);
});

test('Second largest', () => {
  const numbers = [2, 0, 23, 0, 57, 1];

  const output = secondLargest(numbers);

  expect(output).toEqual(2);
});

test('Add sales', () => {
  const londonx = {
    london: 250,
    paris: 300,
    berlin: 150,
    madrid: 400
  };

  const londonOutput = addSales('london', 50);
  expect(londonOutput).toEqual(londonx);

  const barcelonax = {
    london: 200,
    paris: 300,
    berlin: 150,
    madrid: 400,
    barcelona: 200
  };

  const barcelonaOutput = addSales('barcelona', 200);
  expect(barcelonaOutput).toEqual(barcelonax);
});

test('Total sales', () => {
  const output = totalSales({
    london: 200,
    paris: 100,
    berlin: 150,
    oslo: 50
  });

  expect(output).toEqual(500);
});

test('Highest sum - 1', () => {
  const input = [[4, 3, 2], [7, 1], [9, 11, 15, 1]];

  const output = highestSum(input);

  expect(output).toEqual(36);
});

test('Highest sum - 2', () => {
  const input = [[12, 3, 4], [], [21, 7], [9, 5, 3]];

  const output = highestSum(input);

  expect(output).toEqual(28);
});

test.only('Wallet sum', () => {
  const output = walletSum({
    5: 3,
    10: 8,
    20: 5
  });

  expect(output).toEqual(195);
});

test('Wallet merge', () => {
  const output = walletMerge(
    {
      5: 2,
      10: 3,
      20: 1
    },
    {
      5: 4,
      10: 7,
      20: 3
    }
  );

  expect(output).toEqual({
    5: 6,
    10: 10,
    20: 4
  });
});

test('Array of wallets', () => {
  const output = arrayOfWallets([
    {
      5: 2,
      10: 3,
      20: 8
    },
    {
      5: 2,
      10: 1,
      20: 0
    },
    {
      5: 0,
      10: 3,
      20: 4
    }
  ]);

  expect(output).toEqual({
    5: 4,
    10: 7,
    20: 12
  });
});

test('Crazy money', () => {
  const output = crazyMoney([
    {
      2: 1,
      7: 3,
      14: 2,
      15: 2
    },
    {
      1: 3,
      4: 2,
      5: 2,
      9: 0
    },
    {
      2: 2,
      15: 3
    }
  ]);

  expect(output).toEqual(151);
});
