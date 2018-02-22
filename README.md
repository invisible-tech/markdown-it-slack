# markdown-it-slack
Renders Slack markdown

## Bold

Renders this Slack markdown
```md
*bold*
```

to this HTML
```HTML
<strong>bold</strong>
```

## Emoji

Renders named emojis like
```HTML
:thumbsup:
```

To unicode emoji:
:thumbsup:

## Installation
```md
yarn add markdown-it-slack
```

## Usage

```js
const markdownItSlack = require('markdown-it-slack');
const md = require('markdown-it')().use(markdownItSlack);
```