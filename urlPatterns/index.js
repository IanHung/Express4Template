
//import various routes
var routes = require('../routes/index.js');

//name and assign paths
module.exports = function(options){
	var urlPatterns = {
		"home": {
			path: "/",
			use: routes
		}	
	};
	
	return urlPatterns;
}