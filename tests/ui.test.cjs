const { test } = require('node:test');
const assert = require('node:assert/strict');
const render = require('./render.cjs');
test('all categories expose keyboard-native details', async () => {
  const html = await render("import App from './src/App.jsx';", '<App />');
  assert.equal((html.match(/<details/g) || []).length, 3);
  for (const name of ['Sedans', 'SUVs', 'Luxury']) assert.ok(html.includes(`Learn more about ${name}`));
});
