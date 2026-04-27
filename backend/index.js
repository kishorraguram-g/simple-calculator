const express = require('express');
const app = express();

app.use(express.json());

app.post('/add', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b });
});

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a - b });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});