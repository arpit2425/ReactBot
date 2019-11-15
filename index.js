const express=require('express');
const BodyParser=require('body-parser');
const app=express();
require('./routes/dialogflowroutes')(app);
app.use(BodyParser.json());
app.listen(process.env.PORT || 5000);
