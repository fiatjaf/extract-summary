[extract-summary](https://npmjs.com/package/extract-summary) extracts summaries from blocks of text.

```javascript
const extractSummary = require('extract-summary')

let summary = extractSummary(`

<p><b>Human action</b> is <em>purposeful behavior</em>. Or we may say: Action is will put
into operation and transformed into an agency, is aiming at ends and goals, is the ego's
meaningful response to stimuli and to the conditions of its environment, is a person's
conscious adjustment to the state of the universe that determines his life. Such paraphrases
may clarify the definition given and prevent possible misinterpretations. But the definition
itself is adequate and does not need complement of commentary.</p>

(continuining HTML content...)

`, 'html')
```

That yields a string that can be used as a summary in blogs and similar things.

Please see [the source](index.js) to see a grasp of the algorithm being used. It is simple, but it is not just slicing the text without looking at it. See [the tests](test.js) for more examples.

Licensed in the MIT terms.
