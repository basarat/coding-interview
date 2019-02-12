let contents = '';
const restore = global.console.log;
beforeAll(() => {
  contents = '';
  global.console.log = (x) => contents = contents + (contents ? '\n' : '') + x;
})
afterAll(() => {
  global.console.log = restore;
})

test('fizzBuzz', () => {
  require('./fizzBuzz');
  expect(contents).toMatchSnapshot();
});
