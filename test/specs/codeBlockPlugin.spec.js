'use strict'

const assert = require('assert')
const md = require('markdown-it')()

const codeBlockPlugin = require('../../src/codeBlockPlugin.js')

md.use(codeBlockPlugin)

describe('markdown-it code block plugin', () => {
  const expectedResult = '<pre><code>Hello\nVery crazy code\n</code></pre>\n<p>Hello People</p>\n'

  it('should properly add \\n', () => {
    const input = '```\nHello\nVery crazy code\n```\nHello People'

    const mdOutput = md.render(input)

    assert.equal(expectedResult, mdOutput)
  })

  it('should properly add \\n', () => {
    const input = '```\nHello\nVery crazy code```\nHello People'

    const mdOutput = md.render(input)

    assert.equal(expectedResult, mdOutput)
  })

  it('should properly add \\n', () => {
    const input = '```Hello\nVery crazy code\n```\nHello People'

    const mdOutput = md.render(input)

    assert.equal(expectedResult, mdOutput)
  })

  it('should properly add \\n', () => {
    const input = '```Hello\nVery crazy code```\nHello People'

    const mdOutput = md.render(input)

    assert.equal(expectedResult, mdOutput)
  })
})
