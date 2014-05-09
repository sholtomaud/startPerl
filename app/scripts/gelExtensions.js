var pathHelpers = require('gedi-paths');

module.exports = function(app){
    app.gaffa.gedi.gel.scope.createPath = function(scope, args){
        args.callee.sourcePathInfo = {
            path: pathHelpers.create(args.next())
        };
    };
};