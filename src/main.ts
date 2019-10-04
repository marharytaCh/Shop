import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import * as fs from "fs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();



// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import * as http from 'http';
// import * as https from 'https';
// import * as express from 'express';
// import * as fs from "fs";



// async function bootstrap() {
  
//   const httpsOptions = {
//     key: fs.readFileSync('./secrets/private-key.pem'),
//     cert: fs.readFileSync('./secrets/public-certificate.pem'),
//   };
  
//   const server = express();
//   const app = await NestFactory.create(
//     AppModule,
//     new ExpressAdapter(server),
//   );
//   await app.init();
  
//   http.createServer(server).listen(3000);
//   https.createServer(httpsOptions, server).listen(443);
// }
// bootstrap();




// async function bootstrap() {
//   const fs = require('fs');
//   const httpsOptions = {
//     key: fs.readFileSync('./secrets/private-key.pem'),
//     cert: fs.readFileSync('./secrets/public-certificate.pem'),
//   };
//   const app = await NestFactory.create(AppModule, {httpsOptions,});
 