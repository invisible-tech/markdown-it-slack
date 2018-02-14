# markdown-it-slack
Renders this Slack markdown

```md
*bold*
```

to this HTML

```HTML
<strong>bold</strong>
```
## Usage

```js
const markdownItStrong = require('markdown-it-underline');
const md = require('markdown-it')().use(markdownItStrong);
```