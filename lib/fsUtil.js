var fs   = require("fs");
var path = require("path");

var rmdirSync = function(rmPath) 
{
    var files = null;
    if(fs.existsSync(rmPath)) 
    {
        files = fs.readdirSync(rmPath);
        files.forEach(function(file,index)
        {

            var curPath = path.join(rmPath, file);
            if(fs.statSync(curPath).isDirectory()) 
            {
                rmdirSync(curPath);
            } 
            else 
            { 
                fs.unlinkSync(curPath);
            }
        });

        fs.rmdirSync(rmPath);
    }
}

var mkdirSync = function(mkPath, mode) 
{ 
    if (!fs.existsSync(mkPath)) 
    {
        var pathtmp;
        mkPath.split(path.sep).forEach(function(dirname) 
        {
            if (pathtmp) 
            {
                pathtmp = path.join(pathtmp, dirname);
            }
            else 
            {
                pathtmp = dirname || "/";
            }

            
            if (!fs.existsSync(pathtmp)) 
            {
                if (!fs.mkdirSync(pathtmp, mode)) 
                {
                    return false;
                }
            }
        });
    }
    return true; 
}

var cpSync = function(srcPath, dstPath)
{
    if(!fs.existsSync(srcPath))
    {
        return ;
    }

    var stats = fs.statSync(srcPath);
    if(stats.isDirectory())
    {
        mkdirSync(dstPath);

        var files = fs.readdirSync(srcPath);
        files.forEach(function(filePath)
        {
            cpSync(path.join(srcPath, filePath), path.join(dstPath, path.basename(filePath)));
        });
    }
    else
    {
        fs.writeFileSync(dstPath, fs.readFileSync(srcPath, "binary"), "binary");
    }
}

module.exports = 
{
    rmdirSync: rmdirSync,
    mkdirSync: mkdirSync,
    cpSync: cpSync
}