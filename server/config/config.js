/*this the configularion file to connect to mongoDB serverOptions.
*/
exports.serverOptions = {
    'auto_reconnect': true,
    'poolSize': 10
};
var connectionstring = "mongodb://nearu:nearu@ds051843.mongolab.com:51843/ultivoz";
exports.mongoconnectionstring = connectionstring;
