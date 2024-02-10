const prettier = require('prettier')

const uglyBrighterScript = `
Function add( x , y  )
 ReTurn x +   y
End Function
`

describe('inferred parser', () => {
  it('automatically formats BrighterScript', () => {
    expect(
      prettier.format(uglyBrighterScript, {
        filepath: 'ExampleFile.bs',
        plugins: ['.'],
      }),
    ).toMatchSnapshot()
  })

  it('automatically formats BrightScript', () => {
    expect(
      prettier.format(uglyBrighterScript, {
        filepath: 'ExampleFile.brs',
        plugins: ['.'],
      }),
    ).toMatchSnapshot()
  })
})
