'use strict';

module.exports.getDefaultOptions = () => {
    return {
        changeOrigin: true,
        prependPath: false,
    };
}

module.exports.getRoutes = () => {
    return [
        { 
            "path"   : "/users",
            "target" : "http://localhost:8081" 
        },
        { 
            "path"       : "/books",
            "target"     : "http://localhost:8082",
        }
    ];
}