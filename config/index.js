const configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function () {
        return `mongodb+srv://${configValues.uname}:${configValues.pswd}
        @nodetodosample-4gyoc.mongodb.net/test?retryWrites=true&w=majority`;
    }
}