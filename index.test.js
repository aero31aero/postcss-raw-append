let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('copies something simple', async () => {
  let input = 'a {}'
  let output = 'a {}\n\nb {}'
  let opts = {
    data: 'b {}'
  }
  await run(input, output, opts)
})

it('copies complex', async () => {
  let input = 'a {}'
  let output = 'a {}\n\nb {\n  c {}\n}'
  let opts = {
    data: 'b {\n  c {}\n}'
  }
  await run(input, output, opts)
})
