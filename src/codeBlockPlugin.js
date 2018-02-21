'use strict'

const {
  endsWith,
  forEach,
  includes,
  split,
} = require('lodash/fp')

const forEachValueIndex = forEach.convert({ cap: false })

const hasCloseCodeBlock = includes('```')

const codeBlockPlugin = function (md) {
  const originalRender = md.renderer.render
  md.renderer.render = function (tokens, opts, _) {
    forEachValueIndex((token, idx) => {
      if (token.type === 'fence') {
        if (token.tag === 'code') {
          if (token.info) {
            token.content = `${token.info}\n${token.content}`
            token.info = ''
          }

          if (hasCloseCodeBlock(token.content)) {
            const [ newContent, toParseAgain ] = split('```')(token.content)
            token.content = (! endsWith('\n')(token.content)) ? `${newContent}\n` : newContent
            tokens.splice(idx + 1, 0, ...(md.parse(toParseAgain)))
          }
        }
      }
    })(tokens)

    return originalRender.call(this, tokens, opts, _)
  }
}

module.exports = codeBlockPlugin
