import expres from 'express';

const app = expres();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'This is some data from the server',
        timestamp: new Date(),
    };
    res.status(200).json(data);
});

export default app;
