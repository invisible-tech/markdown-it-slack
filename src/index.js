const emoji = require('markdown-it-emoji')
const strongPlugin = require('./strongPlugin.js')

const combinedPlugin = (md, emojiOptions) => {
  md.use(emoji, emojiOptions)
  md.use(strongPlugin)
}

module.exports = combinedPlugin
