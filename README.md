# Array methods exercises

## Instructions

1. Fork repo
2. Clone forked repo to local machine
3. Run `npm install` from project folder on your machine after cloning to download external dependencies from `npm`. You only need to run this once after cloning.
3. The exercise questions are in `src/index.js`.
4. The exercises have automated tests in `test/index.test.js`. Feel free to take a look in the test file for possible inputs and expected outputs.
5. Work in pairs to implement the functions in `src/index.js`. Take turns in implementing functions.
6. Run `npm test` using command line from project folder to check if your answer is correct.
7. Commit your code after each exercise and push your changes to Github. Create a Pull Request after first push.

To run a test for only single function, you can change the test function name from `test` to `test.only` in the test file. This will limit the amount of output you receive from each test run and make it easier to focus on the function you are working on.

for example change
```
test('Add', () => {
  const result = add( 2, 3 );

  expect( result ).toEqual( 5 );
});
```

to

```
test.only('Add', () => {
  const result = add( 2, 3 );

  expect( result ).toEqual( 5 );
});
```
