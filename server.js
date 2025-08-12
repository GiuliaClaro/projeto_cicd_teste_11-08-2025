import express from 'express';

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Sever is running on http://localhost:3000')
});
export default app