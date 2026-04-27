const fetch = require('node-fetch');

test('Addition API works', async () => {
  const res = await fetch('http://localhost:3000/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ a: 5, b: 3 })
  });

  const data = await res.json();
  expect(data.result).toBe(8);
});