const express = require('express');
const morgan = require("morgan");
const app = express();
const userRoutes = require('./routes/user.route')
const commonMiddleware = require('./middleware/common.middleware')

// +++++ Middleware Start +++++
app.use(commonMiddleware.requestLogger);
app.use(commonMiddleware.requestTime)
// +++++ Middleware End +++++
app.use(morgan("dev"));
app.use("/",userRoutes); 
app.use("/getAllUser",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running...")
})