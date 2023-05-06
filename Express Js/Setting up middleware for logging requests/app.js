//Setting up middleware for logging requests
const express=require('express');
const morgan=require('morgan');
const app=express();

app.use(morgan('combined'));
//:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
//::1 - - [06/May/2023:13:41:22 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.68"
app.use('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});