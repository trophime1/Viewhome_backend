import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from "cookie-parser";
import path from 'path';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO).then (()=>{
   console.log("connected to database")
}).catch((err)=>{
   console.log(err)
})
const app =express();
const _dirname =path.resolve()
app.use(express.json())
app.use(cookieParser());
app.use(cors({origin:"*"}));

 app.listen(3000, ()=> {
    console.log('server is running on port 3000!!!')
 });
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);
// app.use(express.static(path.join(_dirname, '/client/dist')))
// //handling any other routes that are not found in the above middlewares
// app.get('*', (req,res)=> {
//    res.sendFile(path.join(_dirname ,"client","dist","index.html"))
//    });
// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:5173', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use((err,req,res,next)=>{
   const statusCode = err.statusCode || 500;
   const message =err.message || 'internal server error';
   return res.status(statusCode).json({
      success:false,
      statusCode,
      message
      
   })

})













// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from './routes/user.route.js'
// import authRouter from './routes/auth.route.js'
// import listingRouter from './routes/listing.route.js'
// import cookieParser from "cookie-parser";
// import path from 'path';
// import cors from 'cors';

// dotenv.config();

// mongoose.connect(process.env.MONGO).then(() => {
//     console.log("Connected to database");
// }).catch((err) => {
//     console.log(err);
// });

// const app = express();
// const _dirname = path.resolve();

// app.use(express.json());
// app.use(cookieParser());

// // Enable CORS with specific origin
// app.use(cors({ origin: 'http://localhost:5173' }));

// app.listen(3000, () => {
//     console.log('Server is running on port 3000!!!');
// });

// app.use('/api/user', userRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal server error';
//     return res.status(statusCode).json({
//         success: false,
//         statusCode,
//         message
//     });
// });


