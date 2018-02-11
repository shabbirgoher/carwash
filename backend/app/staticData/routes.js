const buildings = require('./buildings');

module.exports = function (app){

    app.get('/buildings', function(req, res){
        res.status(200).send(buildings.list);
    })
}