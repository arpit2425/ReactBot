const proxy=require('http-proxy-middleware');
module.exports=function(app)
{
    app.use(Proxy('/api',
    {target:'http://localhost:5000'}));
};