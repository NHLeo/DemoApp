/**
 * Created by Leo on 12/1/2016.
 */
var fs = require('fs');

module.exports.save = function(req, res) {
    var theUser = req.body;
    fs.writeFileSync('app/data/user/' + req.params.userName + '.json', JSON.stringify(theUser));
    res.send(theUser);
}