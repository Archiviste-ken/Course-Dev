import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the backend server!' });
});

    app.get('/api/data', (req, res) => {
    const data = {
        id: 1,
        name: 'Sample Data',
        description: 'This is some sample data from the backend server.'
    };
    res.status(200).json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});