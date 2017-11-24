var url    = require("../package.json").templateListUrl;
var client = url.startsWith("https://") ? require("https") : require("http");

var get = function()
{
    var p = new Promise(function(res, rej)
    {
        var request = client.get(url, function(response)
        {
            if(response.statusCode != 200 && response.statusCode != 304)
            {
                rej(new Error("Get template list fail, code "+response.statusCode));
                return ;
            }

            var body = [];
            response.on("data", function(data)
            {
                body.push(data);
            });

            response.on("end", function()
            {
                var json = body.join("");

                res(JSON.parse(json));
            });
        });

        request.on("error", function(error)
        {
            rej(error);
        });
    });

    return p;
}

module.exports = 
{
    get: get
}