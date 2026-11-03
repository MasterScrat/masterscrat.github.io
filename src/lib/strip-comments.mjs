import { defineHastPlugin } from 'satteri';

// HTML comments in Markdown never reach the built site (not even the page source).
// Lets each post/project keep its research notes in the same file, inside a
// `<!-- research … -->` block at the bottom.
const isComment = (value) => typeof value === 'string' && value.trimStart().startsWith('<!--');

export const stripComments = defineHastPlugin({
  name: 'strip-comments',
  comment(node, ctx) {
    ctx.removeNode(node);
  },
  raw(node, ctx) {
    if (isComment(node.value)) ctx.removeNode(node);
  },
});
