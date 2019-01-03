var request = require('request');
var engine = require("./Engine");
var convert = require('xml-js');


module.exports = function (obj) {
    var url = obj.url;
    request.get(url,
        function (err, response, body) {
            var players = [];

            var result = JSON.parse(convert.xml2json(body, { compact: true, spaces: 4 }));
            result.highscore.player.forEach(element => {
                players.push(element._attributes);
            });

            engine.updatePoints(players);
        }
    );
}
