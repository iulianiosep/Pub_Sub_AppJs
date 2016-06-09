/**
 * Created by Catalin on 06.06.2016.
 */
var
    config,
    AWS = require("aws-sdk");

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "****";
AWS.config.secretAccessKey = "**+**";

AWS.config.update({
    region: "us-west-1"
});
config = {
    AWS: AWS
};
module.exports = config; 