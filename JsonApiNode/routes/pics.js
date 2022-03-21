const userRoutes = (app, fs) =>{
    const dataPath = './data/data.json';
    app.get('/pics', (req, res) => {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};


module.exports = userRoutes;