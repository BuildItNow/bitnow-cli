var cp      = require("child_process");
var exec    = function(cmd)
{
    var p = new Promise(function(res, rej)
    {
        var r = cp.exec(cmd, function (error, stdout, stderr) 
        {
            if(error)
            {
                rej(error)
            }
            else
            {
                res();
            }
        });
    
        r.stdout.pipe(process.stdout);
        r.stderr.pipe(process.stderr);
    });
    
    return p;
}

var execSync = function(cmd, options)
{
    try
    {
        cp.execSync(cmd, options);

        return 1;
    }
    catch(e)
    {
        return 0;
    }
}

module.exports = 
{
    exec: exec,
    execSync: execSync
}