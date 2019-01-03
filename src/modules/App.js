var config = require("./Configurator");
var OgameRequester = require("./OgameRequester");
class App {
    run() {
        var universes = config.configure().universes;
        for (var test in universes) {
            OgameRequester(universes[test]);
        }
    }
};

module.exports = new App();