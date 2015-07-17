/**
 * Author: why520crazy
 * Create Datetime: 2015-07-17 17:00
 */

var request = require("request"),
    isProduction = ["prod","production"].indexOf((process.env.NODE_ENV || "").toLowerCase()) >= 0;
/**
 * var webhook = new Webhook(url);
 * webhook.sendAttachment()
 */
var Webhook = function () {
    if (arguments.length == 0) {
        throw new Error("the input arguments invalid.");
    }
    if (arguments.length == 1 && typeof arguments[0] == "string") {
        this._url = arguments[0]
    }
};

/**
 * Attachment Data
 * {
 *  fallback: "",
 *  color   : "#f16355",
 *  pretext : "",
 *  title   : "",
 *  text    : "",
 *  fields  : [
 *      {
 *          title: "",
 *          value: "",
 *          short: 1
 *      },
 *      {
 *          title: "",
 *          value: "",
 *          short: 1
 *      }
 *  ]
 *}
 * @param data
 */
Webhook.prototype.sendAttachment = function (data) {
    request.post({
        url    : this._url,
        json   : {attachment: data},
        timeout: 50000
    }, function (err, res, body) {
        if (err) {
            return console.error(err);
        }
        if(!isProduction){
            console.log("send webhook success,body:" + JSON.stringify(body));
        }
    });
};

Webhook.prototype.sendText = function (text) {
    request.post({
        url    : this._url,
        json   : {"text": text},
        timeout: 50000
    }, function (err, res, body) {
        if (err) {
            return console.error(err);
        }
        if(!isProduction){
            console.log("send webhook success,body:" + JSON.stringify(body));
        }
    });
};

exports.Webhook = Webhook;