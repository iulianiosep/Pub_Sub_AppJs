/**
 * Created by Catalin on 06.06.2016.
 */
var
    config,
    AWS = require("aws-sdk");

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AccessKey";
AWS.config.secretAccessKey = "SecretAccessKey";

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
config = {
    AWS: AWS
};
module.exports = config; 