var yaml = require("js-yaml");
var fs = require("fs");

exports.configure = function configure() {
    try {
        var docs = yaml.safeLoad(fs.readFileSync('src/config/universes.yml', "utf-8"));
        return docs;
    } catch (e) {
        console.log(e);
    }
}
