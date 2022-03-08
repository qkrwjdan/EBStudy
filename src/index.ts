import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
const VERSION = process.env.VERSION || '1.0.0';

app.get('/', (req, res) => {
    res.send({ version: VERSION });
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));