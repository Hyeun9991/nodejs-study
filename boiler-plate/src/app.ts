import express, { Request, Response, NextFunction } from 'express';
import User from '../models/User';

const app = express();
const mongoose = require('mongoose');
const config = require('../config/key.js');
const port = 8080;

// 데이터 분석
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB와 어플리케이션 연결
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log('MongoDB Connected...!');
  })
  .catch((err: Error) => {
    console.log(err);
  });

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});

// 회원가입에 필요한 정보들을 client에서 가져오고, DB에 저장
app.post('/register', async (req: Request, res: Response) => {
  const user = new User(req.body);

  await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err: Error) => {
      console.log(err);

      res.json({
        success: false,
        err: err,
      });
    });
});

app.listen(port, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${port}
  ################################################
`);
});
