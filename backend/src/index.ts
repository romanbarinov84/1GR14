import express, { Request, Response } from 'express';



const Ideas = [
    {
        id: 1,
        nick: 'cool-idea-nick1',
        name: 'Smart Task Manager',
        description:
            'A task management application with priorities, deadlines, and progress tracking.',
    },
    {
        id: 2,
        nick: 'cool-idea-nick2',
        name: 'Weather Dashboard',
        description:
            'An application that displays current weather, forecasts, and weather alerts.',
    },
    {
        id: 3,
        nick: 'cool-idea-nick3',
        name: 'Online Book Store',
        description:
            'An online bookstore where users can browse books, search by category, and place orders.',
    },
    {
        id: 4,
        nick: 'cool-idea-nick4',
        name: 'Expense Tracker',
        description:
            'A personal finance application that tracks income, expenses, and monthly budgets.',
    },
    {
        id: 5,
        nick: 'cool-idea-nick5',
        name: 'Recipe Finder',
        description:
            'An application that helps users discover recipes based on available ingredients.',
    },
];

const app = express();

app.get('/ping', (request: Request, response: Response) => {
    response.send('pong');
});
app.get('/ideas', (request: Request, response: Response) => {
    response.send(Ideas);
});

app.listen(3000, () => {
    console.info('Server started');
});