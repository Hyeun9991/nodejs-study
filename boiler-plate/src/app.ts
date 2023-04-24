import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 8080;

const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://hyeun9991:abcd1234@boilerplate.sugnrkx.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('MongoDB Connected...!');
  })
  .catch((err: Error) => {
    console.log(err);
  });

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
