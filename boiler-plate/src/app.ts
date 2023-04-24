import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome! 안녕');
});

app.listen(port, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${port}
  ################################################
`);
});
