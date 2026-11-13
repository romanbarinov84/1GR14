import express, { Request, Response } from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './trpc';




const app = express();

app.get('/ping', (request: Request, response: Response) => {
    response.send('pong');
});

app.use('/trpc' ,trpcExpress.createExpressMiddleware({
    router:trpcRouter
}) )

app.listen(3000, () => {
    console.info('Server started');
});