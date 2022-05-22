const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config();
const mongo = require('./shared');
const productRouter = require('./router/product');
const UserRouter = require('./router/user');


const PORT = process.env.PORT || 8000;


const app = express();

app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:3000"
    })
  );

mongo.connectMongoose();

app.use('/', (req,res,next) => {
    console.log("Middleware");
    next();
});


app.use('/users' , UserRouter);

app.use('/product', productRouter);

app.listen(PORT, () => {
    console.log(`Web Server is running in PORT: ${PORT}`)
})