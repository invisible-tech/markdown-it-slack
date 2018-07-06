'use strict'

const emoji = require('markdown-it-emoji')
const strongPlugin = require('./strongPlugin.js')
const codeBlockPlugin = require('./codeBlockPlugin.js')

const combinedPlugin = (md, emojiOptions) => {
  md.use(emoji, emojiOptions)
  md.use(strongPlugin)
  md.use(codeBlockPlugin)
}

module.exports = combinedPlugin
