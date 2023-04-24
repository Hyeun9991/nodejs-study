# Node.js + Express + TypeScript 환경 세팅법

1. package.json 파일 생성
   - `npm init`
   - entry point: app.ts

<br>

2. express, typescript, ts-node, nodemon 설치
   - `npm install -D express typescript ts-node nodemon @types/node @types/express @types/express-serve-static-core`
   - nodemon : 서버 코드를 변경 할 때마다 서버를 재시작하는건 귀찮은 일입니다. 이 일을 자동으로 대신 해줍니다!
   - ts-node : Node.js 상에서 TypeScript Compiler를 통하지 않고도, 직접 TypeScript를 실행시키는 역할을 합니다.

<br>

3. tsconfig.json 파일 생성

   ```json
   {
     "compilerOptions": {
       "target": "es6", // 어떤 버전으로 컴파일할지 작성
       "module": "commonjs", //어떤 모듈 방식으로 컴파일할지 설정
       "outDir": "./dist", //컴파일 후 js 파일들이 생성되는 곳
       "rootDir": ".", //루트 폴더
       "strict": true, //strict 옵션 활성화
       "moduleResolution": "node", //모듈 해석 방법 설정: 'node' (Node.js)
       "esModuleInterop": true,
       "jsx": "react"
     }
   }
   ```

   - `npx tsc --init`

<br>

4. express 코드 작성

   ```ts
   import express, { Request, Response, NextFunction } from 'express';

   const app = express();

   app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
     res.send('welcome!');
   });

   app.listen('1234', () => {
     console.log(`
       ################################################
       🛡️  Server listening on port: 1234🛡️
       ################################################
     `);
   });
   ```

   - root>src>app.ts 작성
   - **백엔드 시작점**

<br>

5. package.json scripts 수정
   ```json
   "scripts": {
     "start": "node dist/app.js",
     "build": "tsc -p .",
     "dev": "nodemon --watch \"src/**/*.ts\" --exec \"ts-node\" src/app.ts"
   }
   ```
   - "start": "node dist/app.js" : 컴파일된 js파일로 시작
   - "build": "tsc -p ." : typescript를 javascript로 빌드

<br>

6. 서버 시작
   - `npm run dev`
   - `http://localhost:1234/welcome` 접속하면 'welcome!' 화면 출력됨.
