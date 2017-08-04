const toText = require('html-to-text')
const marked = require('marked')

module.exports = extractSummary

function extractSummary (content, ext) {
  if (ext[0] === '.') ext = ext.slice(1)
  if (ext === 'md') {
    content = marked(content)
    ext = 'html'
  }

  var text = ext === 'html'
    ? toText.fromString(content, {ignoreHref: true, ignoreImage: true, wordwrap: 99999})
    : content

  var summary = ''

  var chars = text.split('')
  for (var i = 0; i < chars.length; i++) {
    var ch = chars[i]
    summary += ch
    if (ch === '\n' && chars[i + 1] === '\n' && summary.length > 300) {
      // paragraph
      break
    }
    if (ch === ' ' && summary.length >= 450) {
      // word break
      break
    }
    if (summary.length > 500) {
      // hard limit
      summary = summary.slice(0, 450)
      break
    }
  }

  // remove header lines
  summary = summary
    .split('\n')
    .filter(line => line !== line.toUpperCase())
    .join('\n')
    .trim()

  return summary
}
