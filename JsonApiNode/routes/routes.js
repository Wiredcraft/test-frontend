const userRoutes = require('./pics');

const appRouter = (app, fs) => {
    app.get('/', (req,res)=>{
        res.send('please go to http://localhost:3001/pics');
    });
    userRoutes(app,fs)
};

module.exports = appRouter;