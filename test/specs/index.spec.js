'use strict'

const assert = require('assert')
const md = require('markdown-it')()

const index = require('../../src')

md.use(index)

it('markdown-it combine strong plugin with emoji plugin', () => {
  const input = '_hello_ *big* hello :+1:'
  const expectedResult = '<em>hello</em> <strong>big</strong> hello 👍'
  const mdOutput = md.renderInline(input)
  assert.equal(expectedResult, mdOutput)
})
