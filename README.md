# markdown-it-slack
Renders this Slack markdown

```md
*bold*
```

to this HTML

```HTML
<strong>bold</strong>
```
## Installation
```yarn add markdown-it-slack
```

## Usage

```js
const markdownItStrong = require('markdown-it-slack');
const md = require('markdown-it')().use(markdownItStrong);
```