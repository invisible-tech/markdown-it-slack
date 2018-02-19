const assert = require('assert')
const md = require('markdown-it')()

const strongPlugin = require('../../src/strongPlugin.js')

md.use(strongPlugin)

describe('markdown-it asterisk-override plugin', () => {

  it('should generate overridden strong tag', () => {
    const input = "hello *big* hello"
    const expectedResult = "hello <strong>big</strong> hello"
    const mdOutput = md.renderInline(input)
    assert.equal(expectedResult, mdOutput)
  });

  it('should generate em tag as usual', () => {
    const input = "hello _slanted_ hello"
    const expectedResult = "hello <em>slanted</em> hello"
    const mdOutput = md.renderInline(input)
    assert.equal(expectedResult, mdOutput)
  });

});
